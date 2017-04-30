import * as types from './types'

export const addArticle = (article) => ({ type: types.ADD_ARTICLE, article })
export const deleteArticle = (id) => ({ type: types.DELETE_ARTICLE, id })
export const editArticle = (id, article) => ({ type: types.EDIT_ARTICLE, id, article })
export const addComment = (articleId, comment) => ({ type: types.ADD_COMMENT, articleId, comment })
