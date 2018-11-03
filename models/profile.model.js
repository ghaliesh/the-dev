const { getUser } = require('./user.model');
const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
  username: { type: String, required: true, max: 40 },
  company: { type: String },
  website: { type: String },
  location: { type: String, required: true },
  skills: {
    type: [String],
    required: true
  },
  isWorking: Boolean,
  bio: { type: String },
  githubHandle: String,
  experiences: [
    {
      title: String,
      company: String,
      location: String,
      from: Date,
      to: Date,
      currentlyWorkin: Boolean
    }
  ],
  education: { type: String, required: true },
  social: {
    youtube: String,
    facebook: String,
    linkedIn: String,
    insta: String,
    twitter: String
  },
  date: { type: Date, default: Date.now }
});

const Profile = mongoose.model('Profile', schema);

const AddProfile = async (model, userId) => {
  let profile = new Profile(model);
  profile.user = await getUser(userId);
  profile.skills = model.skills.split(',').map(s => s.trim());
  profile = await profile.save();
  return profile;
};

const getProfileBySkill = async (skills, mode) => {
  let profile;
  if (mode == 'or') profile = await Profile.find({ skills: { $in: skills } });
  else profile = await Profile.find({ skills: { $all: skills } });
  return profile;
};

const getUserProfile = async id => {
  const profile = await Profile.findOne({ user: id });
  return profile;
};

const deleteProfile = async userId => {
  const user = userId;
  const profile = await Profile.findOne({ user: userId });
  const result = await profile.remove();
  return result;
};

const getProfileByHandle = async handle => {
  const target = await Profile.findOne({ username: handle });
  return target;
};

const getAll = async _ => {
  const profiles = await Profile.find();
  return profiles;
};
module.exports.getUserProfile = getUserProfile;
module.exports.AddProfile = AddProfile;
module.exports.getAll = getAll;
module.exports.deleteProfile = deleteProfile;
module.exports.getProfileBySkill = getProfileBySkill;
module.exports.getProfileByHandle = getProfileByHandle;
