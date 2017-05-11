import React, { Component } from 'react'
import Item from './Item'
import { PATH } from '../util'
import { bindActionCreators } from 'redux'
import { allArticle } from '../store/actions'
import PropTypes from 'prop-types'
import styles from '../styles/List.css'
import { connect } from 'react-redux'
// const List = ({ articles }) => {
//   console.log(articles);
  // <ul className="list">
  //   {articles.map((article) => <Item key={article.id} article={article} />)}
  // </ul>
// }
class List extends Component {
  constructor ({ articles, actions }){
    super()
  }

  componentDidMount () {
    fetch(PATH + 'posts', {
      method: 'get',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }).then(
      (res) => res.json()
    ).then(
      (resJson) => {
        if (resJson.status === 200){
          console.log(resJson.post)
          this.props.actions.allArticle(resJson.post)
        }
      }
    )
  }

  render () {
    return (<ul className="list">
      {this.props.articles.map((article) => <Item key={article._id} article={article} />)}
    </ul>)
  }

}
//
// List.propTypes = {
//   articles: PropTypes.array.isRequired
// }

const mapStateToProps = (state) => ({ articles: state.articles })
const mapDispatchToProps = (dispatch) => ({ actions: bindActionCreators({ allArticle }, dispatch) })

export default connect(mapStateToProps, mapDispatchToProps)(List)
