const express = require('express');

const router = express.Router();
const recordControllers = require('./purchase.controllers');
const validation = require('./purchase.validation');

const validateWrap = require('../../utils/validation');

router.route('/')
  .get(recordControllers.getData)
  .post(validateWrap([validation.add, ['body']], recordControllers.add));

router.route('/:userId')
  .patch(validateWrap([validation.update, ['body', 'params']], recordControllers.update))
  .get(validateWrap([validation.delete, ['params']], recordControllers.deleteRecord));

module.exports = router;
