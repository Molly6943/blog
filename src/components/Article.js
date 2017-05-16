import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from '../styles/Article.css'
import CommentList from './comments/CommentList'
import CommentBox from './comments/CommentBox'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { addComment } from '../store/actions'
import { $md2html } from '../util'

const Article = ({ match, articles, actions }) => {
  const article = articles.filter((article) => article._id === match.params.id)[0] || {}

  const handleCommend = (comment) => {
    actions.addComment(match.params.id, comment)
  }

  return (
    <div className="article">
      <h1>{article.title}</h1>
      <p>Post At: {new Date(article.createdAt).toLocaleString()}</p>
      <p>Last Modify: {new Date(article.updatedAt).toLocaleString()}</p>
      <p dangerouslySetInnerHTML={ $md2html(article.content || '') } />
      <CommentList comments={article.comments || []} />
      <CommentBox onCommend={handleCommend} />
    </div>
  )
}

const mapStateToProps = (state) => ({ articles: state.articles })
const mapDispatchToProps = (dispatch) => ({ actions: bindActionCreators({ addComment }, dispatch) })

export default connect(mapStateToProps, mapDispatchToProps)(Article)
