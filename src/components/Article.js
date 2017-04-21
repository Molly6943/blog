import React from 'react'
import styles from './Article.css'

const Article =({article}) =>
<div className="article">
    <h1>
    {article.title}
    </h1>
    <p>
    {article.content}
    </p>
</div>
export default Article;
