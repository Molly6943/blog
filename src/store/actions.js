import * as types from './types'
import { PATH, $jsonPostBody } from '../util'

const AddArticle = (article) => ({ type: types.ADD_ARTICLE, article })
const DeleteArticle = (id) => ({ type: types.DELETE_ARTICLE, id })
const EditArticle = (article, id) => ({ type: types.EDIT_ARTICLE, id, article })
const AddComment = (articleId, comment) => ({ type: types.ADD_COMMENT, articleId, comment })
export const allArticle = (articles) => ({ type: types.ALL_ARTICLE, articles })

export const addArticle = (article) => (dispatch) => {
  fetch(PATH + 'post/newArticle', {
    method: 'post',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: $jsonPostBody({
      title: article.title,
      content: article.content
    })
  }).then(
    (res) => res.json()
  ).then(
    (resJson) => {
      if (resJson.status === 200){
        dispatch(AddArticle(article))
      } else {
        console.log(1)
      }
    }
  )
}

export const deleteArticle = (id) => (dispatch) => {
  fetch(PATH + `post/${ id }`, {
    method: 'delete',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: $jsonPostBody({
      _id: id
    })
  }).then(
    (res) => res.json()
  ).then(
    (resJson) => {
      if (resJson.status === 200){
        dispatch(DeleteArticle(id))
      } else {
        console.log(2)
      }
    }
  )
}

export const editArticle = (id, article) => (dispatch) => {
  fetch(PATH + `post/${_id}`, {
    method: 'put',
    mode: 'cros',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: $jsonPostBody({
      article: article.title,
      content: article.content,
      id: _id
    })
  }).then(
    (res) => res.json()
  ).then(
    (resJson) => {
      if (resJson.status === 200){
        console.log(resJson)
        dispatch(EditArticle(article, id))
      } else {
        console.log(3)
      }
    }
  )
}

export const addComment = (articleId, comment) => (
  fetch(PATH + 'post/newArticle', {
    method: 'post',
    mode: 'cros',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: $jsonPostBody({
      comments: [{
        name: comment.name,
        content: comment.content
      }]
    })
  }).then(
    (res) => res.json()
  ).then(
    (resJson) => {
      if (resJson.status === 200){
        dispatch(AddComment(articleId, comment))
      } else {
        console.log(4)
      }
    }
  )
)
