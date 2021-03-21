const express = require('express');

const app = express();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-with, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, PUT, OPTIONS');
  next();
});

app.use('/api/posts', (req, res, next) => {
  const posts = [
    {
      id: '123',
      title: 'fist title',
      content: 'first content'
    },
    {
      id: '1dwd3',
      title: 'second title',
      content: 'second content'
    },
    {
      id: '1grg',
      title: 'third title',
      content: 'third content'
    }
  ];
  res.status(200).json({
    message: 'Posts fetched successfully',
    posts: posts
  });
});

module.exports = app;
