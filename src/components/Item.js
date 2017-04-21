import React from 'react'
import {Link} from 'react-router-dom'
import{$db} from '../util'
import styles from './Item.css'

const Item = ({article,onArticleRemove}) =>
<li className="item">
   <h1>
     <Link to={`/articles/${article.id }`}> {article.title } </Link>
   </h1>
   <div className="edit-article">
   <Link to={ `/articles/${ article.id }/edit`}> Edit </Link>
   </div>
   <button className="remove-button" onClick={ onArticleRemove.bind(this, article.id) }> Remove </button>
   <p>{article.content}</p>
   <p>Post At:{new Date(article.createdAt).toLocaleString()} </p>
   <p>last Modify:{new Date(article.updatedAt).toLocaleString()}</p>
 </li>

export default Item;
