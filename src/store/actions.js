import * as types from './types'
import { PATH, $jsonPostBody, $uid } from '../util'

const AddArticle = (article, json) => ({ type: types.ADD_ARTICLE, article })
const DeleteArticle = (id) => ({ type: types.DELETE_ARTICLE, id })
const EditArticle = (article, id) => ({ type: types.EDIT_ARTICLE, id, article })
const AddComment = (articleId, comment) => ({ type: types.ADD_COMMENT, articleId, comment })

export const addArticle = (article) => (dispatch) => {
  fetch(PATH + `post/${ $uid.generate() }`, {
    method: 'post',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: $jsonPostBody({
      article: article.title,
      content: article.content,
      id: $uid.generate()
    })
  }).then(
    (res) => res.json()
  ).then(
    (resJson) => {
      if (resJson.status === 200){
        message.success(resJson.message)
        dispatch(AddArticle(article))
      } else {
        message.error(resJson.message);
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
      id: id
    })
  }).then(
    (res) => res.json()
  ).then(
    (resJson) => {
      if (resJson.status === 200){
        message.success(resJson.message)
        dispatch(DeleteArticle(id))
      } else {
        message.error(resJson.message);
      }
    }
  )
}

export const editArticle = (id, article) => (dispatch) => {
  fetch(PATH + `post/${id}`, {
    method: 'put',
    mode: 'cros',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: $jsonPostBody({
      article: article.title,
      content: article.content,
      id: id
    })
  }).then(
    (res) => res.json()
  ).then(
    (resJson) => {
      if (resJson.status === 200){
        message.success(resJson.message)
        console.log(resJson)
        dispatch(EditArticle(article, id))
      } else {
        message.error(resJson.message);
      }
    }
  )
}

export const addComment = (articleId, comment) => (
  fetch(PATH + `post/${id}`, {
    method: 'post',
    mode: 'cros',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: $jsonPostBody({
      name: comment.title,
      content: comment.content,
      commentID: comment.commentID
    })
  }).then(
    (res) => res.json()
  ).then(
    (resJson) => {
      if (resJson.status === 200){
        message.success(resJson.message)
        console.log(resJson)
        dispatch(AddComment(articleId, comment))
      } else {
        message.error(resJson.message);
      }
    }
  )
)
