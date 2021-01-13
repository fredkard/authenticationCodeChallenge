const express = require('express');
const authController = require('../../logic/auth/auth.controller');
const userController = require('../../logic/user/user.controller');
const { JWTMiddleware } = require('../middleware/JWT.middleware');

const router = express.Router();

const ac = new authController();
const uc = new userController();

router.post('/auth', ac.auth);
router.get('/user/profile', JWTMiddleware, uc.profile);

module.exports = router