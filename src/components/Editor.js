import React, { Component } from 'react'
import editorCss from '../styles/Editor.css'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { editArticle, addArticle } from '../store/actions'

class Editor extends Component{
  constructor ({ articles, match, actions }) {
    super()
    const id = Number(match.params.id)
    this.state = id ? articles.filter((article) => article.id === id)[0] : { title: '', content: '' }
  }
  handleTitleChange (event){
    this.setState({ title: event.target.value })
  }
  handleContentChange (event){
    this.setState({ content: event.target.value })
  }
  handleSubmit (event){
    event.preventDefault()
    this.state.id ?
    this.props.actions.editArticle(this.state.id, this.state) :
    this.props.actions.addArticle(this.state)
  }
  render () {
    return (
      <div className="write-essay">
        <h1 className="write-title">How about writing an article？</h1>
          <form onSubmit={this.handleSubmit.bind(this)}>
            <input className="input-title" type="text" placeholder=" enter title" value={this.state.title} onChange={this.handleTitleChange.bind(this)} />
            <textarea className="input-content" placeholder="  enter content(support markdown)" value={this.state.content} onChange={this.handleContentChange.bind(this)} />
            <input className="submit-button" type="submit" value="submit"/>
          </form>
      </div>
    )
  }
}
const mapStateToProps = (state) => ({ articles: state.articles })
const mapDispatchToProps = (dispatch) => ({ actions: bindActionCreators({ editArticle, addArticle }, dispatch) })

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Editor)
