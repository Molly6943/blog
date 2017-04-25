import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../styles/Item.css'
import { $md2html } from '../util'

const Item = ({ article, onArticleRemove }) =>
<li className="item">
   <h1>
     <Link to={`/articles/${ article.id }`}> {article.title } </Link>
   </h1>
   <div className="edit-article">
    <Link to={ `/articles/${ article.id }/edit`}> Edit </Link>
   </div>
   <button className="remove-button" onClick={ onArticleRemove.bind(this, article.id) }> Remove </button>
   <p dangerouslySetInnerHTML={ $md2html(article.content) } />
   <p>Post At:{new Date(article.createdAt).toLocaleString()} </p>
   <p>last Modify:{new Date(article.updatedAt).toLocaleString()}</p>
 </li>

export default Item;
