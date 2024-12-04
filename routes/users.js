const express = require('express');
const router = express.Router()
const UserController = require('../controllers/UserController');
const {authentication} = require("../middlewares/authentication");

router.post('/',UserController.register)
router.post('/login',UserController.login)
router.post('/logout', authentication, UserController.logout);
router.get('/profile', authentication, UserController.getProfile);

module.exports = router;