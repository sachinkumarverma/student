const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');
const loginController = require('../controller/loginController');
const passport = require('passport');

router.post('/login', loginController.loginUser);
router.get('/getUsers', userController.getUser);
router.post('/signup', userController.addUser);

module.exports = router;