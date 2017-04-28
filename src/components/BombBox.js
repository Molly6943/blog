import React, { Component } from 'react'
import styles from '../styles/BombBox.css'

class BombBox extends Component {
  render () {
    const { title, content, leftText, rightText, leftClick, rightClick } = this.props
    return (
    <div>
      <div>{title}</div>
      <div>{content}</div>
      <div>
        <a onClick={leftClick}>{leftText}</a>
        <a onClick={rightClick}>{rightText}</a>
      </div>
    </div>
    )
  }
}

export default BombBox
