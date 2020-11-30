const express = require('express');

const router = express.Router();
const recordItems = require('./item.controllers');
const validation = require('./item.validation');

const validateWrap = require('../../utils/validation');

router.route('/')
  .get(recordItems.getData)
  .post(validateWrap([validation.add, ['body']], recordItems.add))
  .post(validateWrap([validation.filter, ['body']], recordItems.filterData));

router.route('/:purchaseId')
  .patch(validateWrap([validation.update, ['body', 'params']], recordItems.update))
  .get(validateWrap([validation.delete, ['params']], recordItems.deleteRecord));

module.exports = router;
