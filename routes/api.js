const path = require('path');

const express = require('express');

const adminController = require('../controllers/admin');

const router = express.Router();

//rest api
//http://localhost:3000/api/v1.0/product

router.get('/v1.0/product', adminController.getProductsFeed);

module.exports = router;