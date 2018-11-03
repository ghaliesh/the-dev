const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
  title: { type: String, required: true, min: 5, max: 255 },
  body: { type: String, required: true, min: 25, max: 2000 },
  date: { type: Date, default: Date.now },
  likes: { type: Number },
  dislikes: Number,
  comments: [String]
});

const Aricle = mongoose.model('Article', schema);

const getAllArticles = async _ => {
  let articles = await Aricle.find();
  return articles;
};

const getArticles = async id => {
  let article = await Aricle.findById(id);
  return article;
};

const addArticle = async (model, userId) => {
  let article = new Aricle(model);
  article.user = userId;
  article.likes = 0;
  article.dislikes = 0;
  article = await article.save();
  return article;
};

const addComment = async (comment, id) => {
  let article = new Aricle.findById(id);
  article.comments.unshift(comment);
  article = await article.save();
  return article;
};

const deleteArticle = async id => {
  let article = await Aricle.findById(id);
  article = await article.remove();
  return article;
};

const disLikeArticle = async id => {
  let article = await Aricle.findById(id);
  if (article) {
    article.dislikes += 1;
  }
};

const likeArticle = async id => {
  let article = await Aricle.findById(id);
  if (article) {
    article.likes += 1;
  }
};

module.exports.deleteArticle = deleteArticle;
module.exports.addArticle = addArticle;
module.exports.likeArticle = likeArticle;
module.exports.disLikeArticle = disLikeArticle;
module.exports.addComment = addComment;
module.exports.getAllArticles = getAllArticles;
module.exports.getArticles = getArticles;
