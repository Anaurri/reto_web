const express = require('express');
const router = express.Router();
const createError = require('http-errors');
const phonesController = require('../controllers/phones.controller')

router.get('/phones', phonesController.list); 
router.get('/phones/:id', phonesController.detail);

/*Handel errors*/
router.use((req, res, next)=>{
    next(createError(404, 'Route not found'))
})
module.exports = router;
