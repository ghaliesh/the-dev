const mongoose = require('mongoose');
const gravatar = require('gravatar');
const bcrybt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');

const schema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  avatar: { type: String },
  data: { type: Date, default: Date.now }
});

schema.methods.genreateToken = function() {
  const token = jwt.sign({ _id: this._id }, config.get('jwtPrivateKey'));
  return token;
};

const addUser = async user => {
  let newUser = new User(user);
  const avatar = gravatar.url(user.email, { s: '200', r: 'pg', d: 'mm' });
  newUser.avatar = avatar;
  const hashedPassword = await hashPassword(user.password);
  newUser.password = hashedPassword;
  newUser = await newUser.save();
  return newUser;
};

const getUser = async id => {
  const user = await User.findById(id);
  return user;
};

const loginUser = async user => {
  const target = await User.findOne({ email: user.email }).catch(err =>
    console.log(err)
  );
  const validPassword = await bcrybt.compare(user.password, target.password);
  if (validPassword) {
    return target;
  }
};

hashPassword = async pass => {
  const salt = bcrybt.genSaltSync(10);
  hashed = await bcrybt.hash(pass, salt);
  return hashed;
};

const User = mongoose.model('User', schema);

module.exports.addUser = addUser;
module.exports.getUser = getUser;
module.exports.loginUser = loginUser;
