const express = require('express');
const router = express.Router();
const { getClasses, test } = require('../controllers/classesController.js');

router.get('/data/classes', getClasses);
router.post('/data/user', test);

module.exports = router;
