import React from 'react'
import styles from '../styles/Article.css'
import CommentList from './comments/CommentList'
import { $db, $md2html } from '../util'

const Article = ({ match, article }) => {
  function handelCommentsUpdate (comments) {
    const article_id = match.params.id
    const $articles = $db.get('articles')
    $articles[article_id].comments = comments
    $db.set('articles', $articles)
  }
  console.log(article);
  return (
        <div className="article">
          <h1>
          {article.title}
          </h1>
          <p>Post At: {new Date(article.createdAt).toLocaleString()}</p>
          <p>Last Modify: {new Date(article.updatedAt).toLocaleString()}</p>
          <p dangerouslySetInnerHTML={ $md2html(article.content) } />
          <CommentList comments={article.comments} onCommentsUpdate={handelCommentsUpdate}/>
        </div>
  )
}

export default Article
