import React, { Component } from 'react'
import Item from './Item'
import { PATH } from '../util'
import { bindActionCreators } from 'redux'
import { allArticle } from '../store/actions'
import PropTypes from 'prop-types'
import styles from '../styles/List.css'
import { connect } from 'react-redux'

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


const mapStateToProps = (state) => ({ articles: state.articles })
const mapDispatchToProps = (dispatch) => ({ actions: bindActionCreators({ allArticle }, dispatch) })

export default connect(mapStateToProps, mapDispatchToProps)(List)
