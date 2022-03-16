var express = require('express');
const router = express.Router();

const RouterProducts = require('./components/Products')
router.use('/products', RouterProducts)

module.exports = router;