import React, { Component } from 'react'
import PropTypes from 'prop-types'
import editorCss from '../styles/Editor.css'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { editArticle, addArticle } from '../store/actions'
import BombBox from './BombBox'

class Editor extends Component{
  constructor ({ articles, match, actions, history }) {
    super()
    const id = match.params.id
    this.state = {
      article: id ? articles.filter((article) => article._id === id)[0] : { title: '', content: '' },
      isShown: false
    }
  }

  handleTitleChange (event){
    const new_title = event.target.value
    this.setState((prevState) => {
      const newState = Object.assign({}, prevState)
      newState.article.title = new_title
      return newState
    })
  }

  handleContentChange (event){
    const new_content = event.target.value
    this.setState((prevState) => {
      const newState = Object.assign({}, prevState)
      newState.article.content = new_content
      return newState
    })
  }

  handleSubmit (event){
    event.preventDefault()
    let isShown = this.state.isShown
    this.setState({ isShown: !isShown })
  }

  leftClick () {
    this.setState({ isShown: !this.state.isShown })
  }

  rightClick () {
    this.state.article._id ?
    this.props.actions.editArticle(this.state.article._id, this.state.article) :
    this.props.actions.addArticle(this.state.article)
    this.props.history.push('/')
    this.setState({ isShown: !this.state.isShown })
  }

  render () {
    const content = <p><span>提示语</span></p>
    const bombStatus = this.state.isShown
    return (
      <div className="write-essay">
        <h1 className="write-title">How about writing an article？</h1>
        <form onSubmit = {this.handleSubmit.bind(this)} >
          <input className="input-title" type="text" placeholder="enter title" value={this.state.article.title} onChange={ this.handleTitleChange.bind(this) } />
          <textarea className="input-content" placeholder="enter content(support markdown)" value={this.state.article.content} onChange={ this.handleContentChange.bind(this) } />
          <input className="submit-button" type="submit" value="submit"/>
        </form>
        <div>
          {
            bombStatus ?
            <BombBox
              title="确定提交吗？"
              content={content}
              leftText="取消"
              rightText="确认"
              leftClick={this.leftClick.bind(this)}
              rightClick={this.rightClick.bind(this)} />
            : false
          }
        </div>
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
