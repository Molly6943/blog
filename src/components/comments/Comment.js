import React from 'react'
import PropTypes from 'prop-types'
import styles from '../../styles/comments.css'

const Comment = ({ comment }) =>
    <div className="comment">
      <div className="commnent_contents"> {comment.name}: {comment.content} </div>
      <div className="commnent_time"> {new Date(comment.createdAt).toLocaleString()} </div>
    </div>

Comment.propTypes = {
  comment: PropTypes.objectOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    createdAt: PropTypes.number.isRequired
  }).isRequired).isRequired
}

export default Comment
