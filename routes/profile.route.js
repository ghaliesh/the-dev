const express = require('express');
const router = express.Router();
const { isValid } = require('../middlewares/profile-middleware');
const { isAuthenticated } = require('../middlewares/user-middlewares');
const {
  getUserProfile,
  getAll,
  AddProfile,
  getProfileBySkill,
  deleteProfile,
  getProfileByHandle
} = require('../models/profile.model');

router.get('/get', isAuthenticated, async (req, res) => {
  const id = req.user._id;
  const profile = await getUserProfile(id);
  if (!profile) {
    res.status(400).send('Not found');
  }
  res.status(200).send(profile);
});

router.get('/', async (req, res) => {
  const profiles = await getAll();
  res.status(200).send(profiles);
});

router.get('/getByhandle/:handle', async (req, res) => {
  const profile = await getProfileByHandle(req.query.handle);
  if (!profile) {
    res.status(400).send('Not found');
  }
  res.status(200).send(profile);
});

router.get('/getBySkill/:skill', async (req, res) => {
  const profile = await getProfileBySkill(
    req.query.skill.split(','),
    req.query.mode
  );
  if (!profile) {
    res.status(400).send('Not found');
  }
  res.status(200).send(profile);
});

router.get('/getProfile', isAuthenticated, async (req, res) => {
  const profile = await getUserProfile(req.user._id);

  if (!profile) {
    res.status(400).send('Not found');
  }
  res.status(200).send(profile);
});

router.post('/add', isAuthenticated, isValid, async (req, res) => {
  const userId = req.user._id;
  const result = await AddProfile(req.body, userId);
  res.send(result);
});

router.delete('/remove', isAuthenticated, async (req, res) => {
  const target = await deleteProfile(req.user._id);
  res.status(200).send(target);
});

module.exports = router;
