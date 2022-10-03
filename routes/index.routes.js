const express = require('express')
const { getProducts, getProductDetail } = require('../controllers/controllers')
const router = express.Router()

router.get('/', getProducts)
router.get('/:id', getProductDetail)

module.exports = router