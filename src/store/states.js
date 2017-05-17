import { ADD_ARTICLE, DELETE_ARTICLE, EDIT_ARTICLE, ADD_COMMENT, BOMB_BOX, ALL_ARTICLE, ONE_ARTICLE } from './types'

export default function articles (state = [], action){
  switch (action.type) {
    case ADD_ARTICLE:
      return [
        ...action.article
      ]
    case DELETE_ARTICLE:
      return state.filter((article) => article._id !== action.id)
    case EDIT_ARTICLE:
      return state.map(
        (article) => (
          article._id === action.id ?
          { ...article, ...action.article } :
          article
        )
      )
    case ADD_COMMENT:
      const { articleId, comment } = action
      return state.map((article) => {
        if (article._id === articleId){
          article.comments.push(comment)
        }
        return article
      })
    case ALL_ARTICLE:
      return action.articles
    case ONE_ARTICLE:
      return action.article
    default:
      return state
  }
}
