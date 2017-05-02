import React, { Component } from 'react'
import styles from '../styles/BombBox.css'

class BombBox extends Component {
  render () {
    const { title, content, leftText, rightText, leftClick, rightClick } = this.props
    return (
      <div className="confirm-wins-container">
        <div className="wins">
          <div className="title">{title}</div>
          <div className="title">{content}</div>
          <div className="fn-btn">
            <button className="left-btn btn" onClick={leftClick}>{leftText}</button>
            <button className="right-btn btn" onClick={rightClick}>{rightText}</button>
          </div>
        </div>
      </div>
    )
  }
}

export default BombBox
