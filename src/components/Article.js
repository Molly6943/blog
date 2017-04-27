import React from 'react'
import styles from '../styles/Article.css'
import CommentList from './comments/CommentList'
import CommentBox from './comments/CommentBox'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { addComment } from '../store/actions'
import { $md2html } from '../util'

const Article = ({ match, articles, actions }) => {
  const article = articles.filter((article) => article.id === Number(match.params.id))[0]
  const handleCommend = ($event) => {
    actions.addComment(match.params.id, $event)
  }
  return <div className="article">
      <h1> {article.title} </h1>
      <p>Post At: {new Date(article.createdAt).toLocaleString()}</p>
      <p>Last Modify: {new Date(article.updatedAt).toLocaleString()}</p>
      <p dangerouslySetInnerHTML={ $md2html(article.content) } />
      <CommentList comments = { article.comments } />
      <CommentBox onCommend = { handleCommend } />
    </div>
}

// mapStateToProps建立一个从外部的state对象到UI组件的props对象的映射关系
// mapStateToProps会订阅store，每当state更新的时候，会自动执行，重新计算UI组件的参数，从而触发UI组件的重新渲染
const mapStateToProps = (state) => ({ articles: state.articles })

// mapDispatchToProps是connect的第二个参数，用来建立UI组件参数到store.dispatch方法的映射，也就是说，它定义了哪些用户的
// 操作应该当做action传给store
const mapDispatchToProps = (dispatch) => ({ actions: bindActionCreators({ addComment }, dispatch) })

// connect方法是用来生成容器组件的
export default connect(mapStateToProps, mapDispatchToProps)(Article)
