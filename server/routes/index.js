const bodyParser = require('body-parser');
const { postModel } = require('../collection.js');
const morgan = require('morgan')
const path = require('path')

const routes = (app) => {
  app.use(morgan('dev'))
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
    res.send(path.resolve('dist/index.html'));
  })

  // add article
  app.post('/post/newArticle', function (req, res) {
    let article = new postModel(req.body);
    article.save()
      .then((returnPost) => res.json({ post: returnPost, status: 200 }))
      .catch((err) => res.status(400).send({ message: 'err' }))
  })

  // check single article
  app.get('/post/:postID', function (req, res) {
    let postID = req.params.postID;
    if (postID) {
      postModel.findOne({ _id: postID })
        .then((returnPost) => res.json({ post: returnPost, status: 200 }))
        .catch((err) => res.status(400).send({ message: 'err' }))
    } else {
      res.json({ 'status': 500, 'error': err });
    }
  })

  // check all article
  app.get('/posts', function (req, res) {
    return postModel.find({})
      .then((returnPost) => res.json({ post: returnPost, status: 200 }))
      .catch((err) => res.status(400).send({ message: 'err' }))
  })

  // editor article
  app.put('/post/:postID', function (req, res) {
    let article = new postModel(req.body);
    let postID = req.params.postID;
    if (postID) {
      postModel.findOneAndUpdate(
        { _id: postID },
        { title: article.title, content: article.content, comments: article.comments },
        { new: true })
        .then((returnPost) => res.json({ post: returnPost, status: 200 }))
        .catch((err) => res.status(400).send({ message: 'err' }))
    } else {
      res.json({ 'status': 500, 'error': err });
    }
  })

  // delete article
  app.delete('/post/:postID', function (req, res) {
    let postID = req.params.postID;
    if (postID){
      postModel.find({ _id: postID }).remove()
        .then((returnPost) => res.status(200).send('delete successed!'))
        .catch((err) => res.status(400).send({ message: 'err' }))
    } else {
      res.json({ 'status': 500, 'error': err });
    }
  })

  // add Comments
  app.post('/post/newComment/:postID', function (req, res) {
    let postID = req.params.postID;
    if (postID){
      postModel.findOneAndUpdate(
        { _id: postID },
        { $addToSet: { comments: { name: req.body.name, content: req.body.content } } },
        { new: true })
        .then((returnPost) => res.json({ post: returnPost, status: 200 }))
        .catch((err) => res.status(400).send({ message: 'err' }))
    } else {
      res.json({ 'status': 500, 'error': err });
    }
  })

  app.get('*', function (req, res) {
    console.log('主页GET请求');
    res.sendFile(path.resolve('../dist/index.html'));
  })
}



module.exports = routes;
