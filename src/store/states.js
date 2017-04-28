import { ADD_ARTICLE, DELETE_ARTICLE, EDIT_ARTICLE, ADD_COMMENT, BOMB_BOX } from './types'
import { $uid } from '../util'

export default function articles (state = [], action){
  console.log(JSON.stringify(action))
  console.log('122' + JSON.stringify(state))
  switch (action.type) {
    case ADD_ARTICLE:
      return [
        {
          ...action.article,
          id: $uid.generate(),
          updatedAt: Date.now(),
          createdAt: Date.now(),
          bombStatus: false,
          comments: []
        },
        ...state
      ]
    case DELETE_ARTICLE:
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
    case BOMB_BOX:
      return state.map((ARTICLE) => ARTICLE.bombStatus === false ? ARTICLE.bombStatus = !ARTICLE.bombStatus : ARTICLE.bombStatus)
    default:
      return state
  }
}
