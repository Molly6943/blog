import React, { Component } from 'react'
import editorCss from '../styles/Editor.css'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { editArticle, addArticle, bombAction } from '../store/actions'
import BombBox from './BombBox'

class Editor extends Component{
  constructor ({ articles, match, actions }) {
    console.log('133' + JSON.stringify(articles))
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
  leftClick () {
    this.props.actions.BombAction(false)
  }
  rightClick () {
    // this.context.router.push('/articles')
    this.props.actions.BombAction(false)
  }
  render () {
    const content = <p><span>提示语</span></p>
    const bombStatus = this.props.articles.map((item) => item.bombStatus)
    return (
      <div className="write-essay">
        <h1 className="write-title">How about writing an article？</h1>
          <form onSubmit={this.handleSubmit.bind(this)}>
            <input className="input-title" type="text" placeholder=" enter title" value={this.state.title} onChange={this.handleTitleChange.bind(this)} />
            <textarea className="input-content" placeholder="  enter content(support markdown)" value={this.state.content} onChange={this.handleContentChange.bind(this)} />
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
                leftClick={this.leftClick}
                rightClick={this.rightClick} />
                : false
            }
          </div>
            </div>

    )
  }
}

const mapStateToProps = (state) => ({ articles: state.articles })
const mapDispatchToProps = (dispatch) => ({ actions: bindActionCreators({ editArticle, addArticle, bombAction }, dispatch) })

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Editor)
