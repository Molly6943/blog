import React, { Component } from 'react'
import Item from './Item'
import styles from '../styles/List.css'
import { connect } from 'react-redux'

const List = ({ articles }) => (
  <ul className="list">
    {articles.map((article) => <Item key={article.id} article={article} />)}
  </ul>
)

const mapStateToProps = (state) => ({ articles: state.articles })
export default connect(mapStateToProps)(List)
