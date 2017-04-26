import React from 'react'
import { Route, Redirect, Switch, Link } from 'react-router-dom'
import App from './App'
import List from './components/List'
import Article from './components/Article'
import Editor from './components/Editor'
import About from './components/About'
import styles from './styles/App.css'

export default (
  <div className="app">
    <div className="main-header">
    <img className="main-header__avatar" src="img/avatar.png"/>
    <h1>Hi,I am Meng Meng</h1>
  </div>
  <div className="main-nav">
    <ul>
      <li><Link to="/articles">Blog</Link></li>
      <li><Link to="/articles/new">Write</Link></li>
      <li><Link to="/about">about</Link></li>
    </ul>
  </div>
    <Route exact path="/" render={ () => <Redirect to="/articles"/> } />
    <Route exact path="/articles" component={List} />
    <Route exact path="/about" component={About}/>
    <Switch>
       <Route exact path="/articles/new" component={Editor} />
       <Route exact path="/articles/:id" component={Article} />
    </Switch>
     <Route path="/articles/:id/edit" component={Editor} />
  </div>
)
