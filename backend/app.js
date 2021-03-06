const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Post = require('./models/post');

const app = express();

mongoose.connect('mongodb+srv://xxx:xxx@cluster0.hgdmn.mongodb.net/mean-posts?retryWrites=true&w=majority')
  .then(() => {
    console.log('db connected');
  })
  .catch(() => {
    console.log('db connection failed');
  });

app.use(bodyParser.json());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, PUT, OPTIONS');
  next();
});

app.post('/api/post', (req, res, next) => {
  const post = new Post({
    title: req.body.title,
    content: req.body.content
  });
  console.log(post);
  post.save().then(createdPost => {
    res.status(201).json({
      message: 'post added successfully',
      postId: createdPost._id
    });
  });
});

app.get('/api/posts', (req, res, next) => {
  Post.find()
    .then(documents => {
      res.status(200).json({
        message: 'Posts fetched successfully',
        posts: documents
      });
    });
});

app.delete('/api/posts/:id', (req, res, next) => {
  Post.deleteOne({ _id: req.params.id })
    .then(result => {
      console.log(result);
      res.status(200).json({
        message: 'Post deleted successfully'
      });
    });
});

module.exports = app;
