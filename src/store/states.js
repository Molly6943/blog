import { ADD_ARTICLE, DELETE_ARTICLE, EDIT_ARTICLE, ADD_COMMENT } from './types'
import { $uid } from '../util'

export default function articles (state = [], action){
  console.log(action)
  switch (action.type) {
    case ADD_ARTICLE:
      return [
        {
          ...action.article,
          id: $uid.generate(),
          updatedAt: Date.now(),
          createdAt: Date.now(),
          comments: []
        },
        ...state
      ]
    case DELETE_ARTICLE:
      console.log(action)
      return state.filter((ARTICLE) => ARTICLE.id !== action.id)
    case EDIT_ARTICLE:
      return state.map(
        (ARTICLE) => (
          ARTICLE.id === action.id ?
          { ...ARTICLE, ...action.article, updatedAt: Date.now() } :
          ARTICLE
        )
      )
    case ADD_COMMENT:
      return state.map(
        (ARTICLE) => {
          const comments = ARTICLE.comments.unshift({ ...action.comment, createdAt: Date.now() })
          return ARTICLE.id === action.articleId ? { ...ARTICLE, comments } : ARTICLE
        }
      )
    default:
      return state
  }
}
