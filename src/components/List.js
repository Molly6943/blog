import React, { Component } from 'react'
import Item from './Item'
import PropTypes from 'prop-types'
import styles from '../styles/List.css'
import { connect } from 'react-redux'

const List = ({ articles }) => (
  <ul className="list">
    {articles.map((article) => <Item key={article.id} article={article} />)}
  </ul>
)

List.propTypes = {
  articles: PropTypes.array.isRequired
}

const mapStateToProps = (state) => ({ articles: state.articles })

export default connect(mapStateToProps, null)(List)
