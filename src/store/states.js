import { ADD_ARTICLE, DELETE_ARTICLE, EDIT_ARTICLE, ADD_COMMENT, BOMB_BOX, ALL_ARTICLE } from './types'

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
      return action.articles
      // return state.map(
      //   (article) => {
          // if (article._id === action.articleId) {
            // console.log('article: ', article)
            // console.log('action.comment', action.comment)
            // article.comments.unshift({ ...action.comment })
            // console.log('action.comment unshift : ', article.comments)
            // return [...state]
          // }
          // article._id === action.articleId ?
          // { ...article, ...action.comment } :
          // article
      //     if (article._id === action.articleId) {
      //       console.log('article: ', article)
      //       console.log('action.comment', action.comment)
      //       return { ...article, ...action.comment }
      //     }
      //   }
      // )
    case ALL_ARTICLE:
      return action.articles
    default:
      return state
  }
}
