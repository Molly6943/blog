import React from 'react'
import Item from './Item'
import styles from './List.css'

class List extends React.Component {
  constructor({ articles, onArticleRemove }) {
    super()
    this.state = articles
    this.handleArticleRemove = this.handleArticleRemove.bind(this)
  }
  handleArticleRemove (id) {
    delete this.state[id]
    this.setState(this.state)
    this.props.onArticleRemove(id)
  }
  render () {
    return (
      <ul className="list"> {
        this.state && Object.values(this.state).map(
          article => <Item key={ article.id } article={ article } onArticleRemove={ this.handleArticleRemove.bind(this) }/>
        )
      } </ul>
    )
  }
}
export default List
