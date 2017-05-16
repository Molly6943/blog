import { markdown as $markdown } from 'markdown'

const $md2html = (md) => ({ __html: $markdown.toHTML(md) })
const PATH = 'http://localhost:8081/'
const $jsonPostBody = (object) => JSON.stringify(object).replace(/\"|{|}/g, '').replace(/\:/g, '=').replace(/\,/g, '&&')
export {
  $db,
  $uid,
  $markdown,
  $md2html,
  PATH,
  $jsonPostBody
}
