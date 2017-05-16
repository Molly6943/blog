import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import styles from '../styles/Item.css'
import { $md2html } from '../util'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { deleteArticle } from '../store/actions'

const Item = ({ article, actions }) => {
  const onArticleRemove = () => window.confirm('Are you sure?') ? actions.deleteArticle(article._id) : false

  return (
    <li className="item">
      <h1>
       <Link to={`/articles/${ article._id }`}> {article.title } </Link>
      </h1>
      <div className="edit-article">
        <Link to={ `/articles/${ article._id }/edit`}>
          <button>Edit</button>
        </Link>
      </div>
      <button className="remove-button" onClick={ onArticleRemove }> Remove </button>
      <p dangerouslySetInnerHTML={ $md2html(article.content) } />

   </li>
  )
}


const mapDispatchToProps = (dispatch) => ({ actions: bindActionCreators({ deleteArticle }, dispatch) })

export default connect(null, mapDispatchToProps)(Item)
