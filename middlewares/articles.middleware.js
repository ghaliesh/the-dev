const joi = require('joi');

const isValid = (req, res, next) => {
  const schema = {
    title: joi
      .string()
      .required()
      .min(5)
      .max(255),
    body: joi
      .string()
      .required()
      .min(25)
      .max(2000)
  };

  const { error } = joi.validate(req.body, schema);
  if (!error) next();
  else {
    res.status(400).send(error.details[0].message);
  }
};

module.exports.isValid = isValid;
