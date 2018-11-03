const express = require('express');
const {
  addArticle,
  deleteArticle,
  addComment,
  likeArticle,
  disLikeArticle,
  getAllArticles,
  getArticles
} = require('../models/articles.model');
const { isAuthenticated } = require('../middlewares/user-middlewares');
const router = express.Router();
const { isValid } = require('../middlewares/articles.middleware');

router.get('/', async (req, res) => {
  const result = getAllArticles();
  res.status(200).send(result);
});

router.get('/:id', async (req, res) => {
  const result = getArticles(req.query.id);
  res.status(200).send(result);
});

router.post('/add', isAuthenticated, isValid, async (req, res) => {
  const result = addArticle(req.body, req.user._id);
  res.status(200).send(result);
});

router.post('/addcomment', isAuthenticated, async (req, res) => {
  const result = addComment(req.body.id, req.body.comment);
  res.status(200).send(result);
});

router.post('/like', isAuthenticated, async (req, res) => {
  const result = likeArticle(req.body.id);
  res.status(200).send(result);
});

router.post('/dislike', isAuthenticated, async (req, res) => {
  const result = disLikeArticle(req.body.id);
  res.status(200).send(result);
});

router.delete('/remove', isAuthenticated, async (req, res) => {
  const result = deleteArticle(req.body.id);
  res.status(200).send(s);
});
module.exports = router;
