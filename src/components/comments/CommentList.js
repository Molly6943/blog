import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Comment from './Comment'

const CommentList = ({ comments }) =>
  <div className="commentList">
    { comments.map((comment) => <Comment key={comment._id} comment={comment} />) }
  </div>


export default CommentList
