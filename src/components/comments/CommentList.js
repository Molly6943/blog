import React, { Component } from 'react'
import Comment from './Comment'

const CommentList = ({ comments }) =>
  <div className="commentList">
    { comments.map((comment) => (<Comment key={ comment.createdAt } comment={ comment} />))}
  </div>
export default CommentList
