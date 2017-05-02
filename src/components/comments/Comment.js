import React from 'react'
import styles from '../../styles/comments.css'

const Comment = ({ comment }) =>
    <div className="comment">
      <div className="commnent_contents"> {comment.name}: {comment.content} </div>
      <div className="commnent_time"> {new Date(comment.createdAt).toLocaleString()} </div>
    </div>

export default Comment
