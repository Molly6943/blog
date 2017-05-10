const bodyParser = require('body-parser');
const { postModel } = require('../collection.js');

const routes = (app) => {
  app.use(bodyParser.urlencoded({ extended: true }))
  app.use(bodyParser.json());

  app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  })

  app.get('/', function (req, res) {
    console.log('主页GET请求');
    res.send('hello get');
  })

  // add article
  app.post('/post/:postID', function (req, res) {
    console.log(req.body)
    let article = new postModel(req.body)
    article.ID = req.params.postID
    article.save()
      .then((returnPost) => res.json(returnPost))
      .catch((err) => console.log(err))
  })

  // check single article
  app.get('/post/:postID', function (req, res) {
    let postID = req.params.postID;
    if (postID) {
      postModel.findOne({ ID: postID })
        .then((returnPost) => res.json(returnPost))
        .catch((err) => console.log(err))
    }
    res.send('end')
  })

  // check all article
  app.get('/posts', function (req, res) {
    return postModel.find({})
      .then((returnPost) => res.json(returnPost))
      .catch((err) => console.log(err))
    // res.send('end')
  })

  // editor article
  app.put('/post/:postID', function (req, res) {
    let post = new postModel(req.body);
    let postID = req.params.postID;
    if (postID) {
      postModel.findOneAndUpdate(
        { ID: postID },
        { title: post.article, contents: post.contents, comments: post.comments },
        { new: true })
        .then((returnPost) => res.json(returnPost))
        .catch((err) => console.log(err))
    }
    res.send('end')
  })

  // delete article
  app.delete('/post/:postID', function (req, res) {
    let postID = req.params.postID;
    if (postID){
      postModel.find({ ID: postID }).remove()
        .then(() => console.log('delete successed!'))
        .catch((err) => console.log(err))
    }
    res.send('end')
  })

  // add Comments
  app.post('/post/:commentID', function (req, res) {
    let comments = new postModel(req.body)
    comments.ID = req.params.commentID
    post.save()
      .then((returnComment) => res.json(returnComment))
      .catch((err) => console.log(err))
  })
}


module.exports = routes;
