const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');
const mongoDB = 'mongodb://localhost/post_database';

mongoose.connect(mongoDB);

const db = mongoose.connection;
mongoose.Promise = global.Promise;

db.on('open', function (){
  console.log('MongoDB Connection Successed');
});
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const Schema = mongoose.Schema;
const postSchema = new Schema({
  articleID: Number,
  title: String,
  contents: String,
  comments: [{ commentID: Number, name: String, content: String }]
});

const postModel = mongoose.model('postModel', postSchema);

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

app.get('/', function (req, res) {
  console.log('主页GET请求');
  res.send('hello get');
})

// add article
app.post('/post/:postID', function (req, res) {
  let post = new postModel(req.body)
  post.ID = req.params.postID
  post.save()
    .then((returnPost) => res.json(returnPost))
    .catch((err) => console.log(err))
})

// check single article
app.get('/pospost/:postID', function (req, res) {
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
  postModel.find({})
    .then((returnPost) => res.json(returnPost))
    .catch((err) => console.log(err))
  res.send('end')
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

const server = app.listen(8081, function () {
  var host = server.address().address
  var port = server.address().port

  console.log(' 应用实例，访问地址为 http://%s:%s', host, port)
})
