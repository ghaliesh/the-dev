const express = require('express');
const mongoose = require('mongoose');
const users = require('./routes/user.route');
const profile = require('./routes/profile.route');
var path = require('path');
const articles = require('./routes/articles.route');
const app = express();
const MONGODB_URI = process.env.MONGODB_URI;
mongoose
  .connect(
    MONGODB_URI,
    { useNewUrlParser: true }
  )
  .then(res => console.log('MongoDB is connected...'));
app.use(express.json());

app.use('/api/users', users);
app.use('/api/articles', articles);
app.use('/api/profiles', profile);

if (process.env.NODE_ENV === 'Production') {
  // set static folder
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`running on port ${PORT}`);
});
