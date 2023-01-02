const { body, validationResult } = require("express-validator");

const validateMovie = [
  body("title").isEmail().isLength({ max: 255 }).notEmpty().isString(),
  body("director").isLength({ max: 255 }).notEmpty().isString(),
  body("year").isLength({ max: 255 }).notEmpty().isString(),
  body("color").isLength({ max: 255 }).notEmpty().isString(),
  body("duration").isLength({ max: 255 }).notEmpty().isInt(),
  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      res.status(422).json({ validationErrors: errors.array() });
    } else {
      next();
    }
  },
];

const validateUser = [
  body("email").isEmail().isLength({ max: 255 }).notEmpty(),
  body("firstname").isLength({ max: 255 }).notEmpty(),
  body("lastname").isLength({ max: 255 }).notEmpty(),
  body("city").isLength({ max: 255 }),
  body("language").isLength({ max: 255 }),
  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      res.status(422).json({ validationErrors: errors.array() });
    } else {
      next();
    }
  },
];

module.exports = {
  validateMovie,
  validateUser,
};
