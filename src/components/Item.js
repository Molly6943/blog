import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../styles/Item.css'
import { $md2html } from '../util'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { deleteArticle } from '../store/actions'

const Item = ({ article, actions }) => {
  const onArticleRemove = () => window.confirm('Are you sure?') ? actions.deleteArticle(article.id) : false

  return (
    <li className="item">
      <h1>
       <Link to={`/articles/${ article.id }`}> {article.title } </Link>
      </h1>
      <div className="edit-article">
        <Link to={ `/articles/${ article.id }/edit`}>
          <button>Edit</button>
        </Link>
      </div>
      <button className="remove-button" onClick={ onArticleRemove }> Remove </button>
      <p dangerouslySetInnerHTML={ $md2html(article.content) } />
      <p>Post At:{new Date(article.createdAt).toLocaleString()} </p>
      <p>last Modify:{new Date(article.updatedAt).toLocaleString()}</p>
   </li>
  )
}

const mapDispatchToProps = (dispatch) => ({ actions: bindActionCreators({ deleteArticle }, dispatch) })

export default connect(null, mapDispatchToProps)(Item)
