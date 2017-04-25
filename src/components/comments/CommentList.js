import React, { Component } from 'react'
import Comment from './Comment'
import CommentBox from './CommentBox'
class CommentList extends Component {
  constructor ({ comments, onCommentsUpdate }) {
    super()
    this.state = { comments }
    // console.log(JSON.stringify(comments))
  }
  handleComment (comment) {
    this.state.comments.push(comment)
    this.setState(this.state)
    this.props.onCommentsUpdate(this.state.comments)
  }
  render () {
    return (
      <div className="commentList">
        {
          this.state.comments.map((comment) => (
            <Comment key={ comment.createdAt } comment={comment} />
          ))
        }
        <CommentBox onComment={ this.handleComment.bind(this) }/>
      </div>
    )
  }
}

export default CommentList
