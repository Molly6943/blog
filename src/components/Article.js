import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from '../styles/Article.css'
import CommentList from './comments/CommentList'
import CommentBox from './comments/CommentBox'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { addComment, oneArticle } from '../store/actions'
import { $md2html, PATH } from '../util'


class Article extends Component {
  constructor (props){
    super(props)
  }

  componentDidMount () {
    const id = this.props.match.params.id;
    fetch(PATH + `post/${ id }`, {
      method: 'get',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }).then(
      (res) => res.json()
    ).then(
      (resJson) => {
        if (resJson.status === 200){
          this.props.actions.oneArticle(resJson.post)
        }
      }
    )
  }

  handleCommend (comment) {
    this.props.actions.addComment(this.props.match.params.id, comment)
  }

  render () {
    const article = this.props.article;
    return (
      <div className="article">
        <h1>{article.title}</h1>
        <p>Post At: {new Date(article.createdAt).toLocaleString()}</p>
        <p>Last Modify: {new Date(article.updatedAt).toLocaleString()}</p>
        <p dangerouslySetInnerHTML={ $md2html(article.content || '') } />
        <CommentList comments={article.comments || []} />
        <CommentBox onCommend={this.handleCommend.bind(this)} />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({ article: state.articles })

const mapDispatchToProps = (dispatch) => ({ actions: bindActionCreators({ addComment, oneArticle }, dispatch) })

export default connect(mapStateToProps, mapDispatchToProps)(Article)
