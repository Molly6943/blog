import React,{Component} from 'react'
import editorCss from './Editor.css'
import {Link} from 'react-router-dom'

class Editor extends Component{
    constructor({article,onAdd,onEdit}) {
        super()
        this.state = article
    }
    handleTitleChange(event){
        this.setState({title:event.target.value})
    }
    handleContentChange(event){
        this.setState({content:event.target.value})
    }
    handleSubmit(event){
        event.preventDefault()
        this.state.id ?
        this.props.onEdit(this.state.id,Object.assign( this.state,{ updatedAt:Date.now() } )) :
        this.props.onAdd({ createdAt:Date.now(), updatedAt:Date.now(),comments:[],...this.state })
    }
    render () {
        return (
            <div className="write-essay">
            <h1 className="write-title">How about writing an article？</h1>
            <form onSubmit={this.handleSubmit.bind(this)}>
            <input className="input-title" type="text" placeholder="  enter title" value={this.state.title} onChange={this.handleTitleChange.bind(this)} />
            <textarea className="input-content" placeholder="  enter content(support markdown)" value={this.state.content} onChange={this.handleContentChange.bind(this)} />
            <input className="submit-button" type="submit" value="submit"/>
            </form>
            </div>
        )
    }
}
export default Editor
