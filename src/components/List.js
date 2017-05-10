import React, { Component } from 'react'
import Item from './Item'
import { bindActionCreators } from 'redux'
import { allArticle } from '../store/actions'
import PropTypes from 'prop-types'
import styles from '../styles/List.css'
import { connect } from 'react-redux'

const List = ({ actions }) => {
  let articles = actions.allArticle();
  console.log(articles);
  <ul className="list">
    {articles.map((article) => <Item key={article.id} article={article} />)}
  </ul>
}

List.propTypes = {
  articles: PropTypes.array.isRequired
}

const mapStateToProps = (state) => ({ articles: state.articles })
const mapDispatchToProps = (dispatch) => ({ actions: bindActionCreators({ allArticle }, dispatch) })

export default connect(mapStateToProps, mapDispatchToProps)(List)
