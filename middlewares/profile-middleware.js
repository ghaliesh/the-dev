const Joi = require('joi');

function isValid(req, res, next) {
  const schema = {
    username: Joi.string(),
    company: Joi.string()
      .min(2)
      .max(255),
    website: Joi.string()
      .min(2)
      .max(255),
    location: Joi.string()
      .min(2)
      .max(255)
      .required(),
    skills: Joi.string()
      .min(2)
      .max(255)
      .required(),
    bio: Joi.string()
      .min(10)
      .max(500)
      .required(),
    education: Joi.string()
      .min(10)
      .max(255)
      .required(),
    social: Joi.object(),
    experiences: Joi.object(),
    isWorking: Joi.boolean(),
    githubHandle: Joi.string()
  };
  const { error } = Joi.validate(req.body, schema);
  if (!error) {
    next();
  } else {
    res.status(400).send(error.details[0].message);
  }
}

module.exports.isValid = isValid;
