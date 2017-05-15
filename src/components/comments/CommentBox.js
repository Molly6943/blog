import React, { Component } from 'react'
import PropTypes from 'prop-types'

class CommentBox extends Component {
  constructor ({ article, comment, onCommend }) {
    super()
    this.state = {
      // article: { ...article },
      name: '',
      content: ''
    }
  }

  handleNameChange (event) {
    this.setState({ name: event.target.value })
  }

  handleContentChange (event) {
    this.setState({ content: event.target.value })
  }

  handleSubmit (event) {
    event.preventDefault()
    this.props.onCommend(this.state)
    this.setState({ name: '', content: '' })
  }

  render () {
    return (
      <form className="editor" onSubmit={ this.handleSubmit.bind(this) }>
        <input
          className="input-name"
          value={this.state.name}
          placeholder="enter your name"
          onChange={ this.handleNameChange.bind(this) }
          />
        <textarea
          className="input-comment"
          value={this.state.content}
          placeholder="enter whatever you want to say"
          onChange={ this.handleContentChange.bind(this) }
        />
        <div className="submit-input"><input className="submit" type="submit" value="评论"/></div>
      </form>
    )
  }
}

// CommentBox.propTypes = {
//   onCommend: PropTypes.func.isRequired
// }
export default CommentBox
