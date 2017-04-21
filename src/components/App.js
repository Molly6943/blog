import React from 'react'
import {
  HashRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'
import styles from './App.css'
import List from './List'
import Article from './Article'
import Editor from './Editor'
import About from './About'
import {$db,$uid} from '../util'

const App = () => {
    const $articles = $db.get('articles') || {}
    const renderList = () => <List articles={$articles} onArticleRemove={handleArticleRemove}/>
    const renderArticle = ({match}) => <Article article={$articles[match.params.id]}/>
    const renderArticleEditor = ({match}) => {
        const id = match.params.id;
        const article = id ? $articles[id] :{title:'',content:''}
        return <Editor article={article} onAdd={ handleArticleAdd.bind(this) } onEdit={ handleArticleEdit.bind(this) } />
    }

function handleArticleAdd(article) {
     const id = $uid.generate()
     $articles[id] = { id, ...article }
     updateDb($articles)
}

function handleArticleEdit (id, article) {
   $articles[id] = { id, ...article }
   updateDb($articles)
}

function handleArticleRemove (id) {
    delete $articles[id]
    updateDb($articles)
}

function updateDb (articles) {
    $db.set('articles', articles)
}

return <Router>
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
    <Route exact path="/articles" render={ renderList } />
    <Route exact path="/about" component={About}/>
    <Switch>
       <Route exact path="/articles/new" render={ renderArticleEditor } />
       <Route exact path="/articles/:id" render={ renderArticle } />
    </Switch>
     <Route path="/articles/:id/edit" render={ renderArticleEditor } />
  </div>
  </Router>
}
export default App;
