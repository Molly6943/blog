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
  title: String,
  content: String,
  comments: [{ name: String, content: String, createdAt: { type: Date, required: true, default: Date.now } }]
}, { timestamps: {} });

const postModel = mongoose.model('postModel', postSchema);

module.exports = { postModel };
