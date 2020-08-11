const express = require('express');
const router = express.Router();

const ctrlUser = require('../controllers/user.controller');
const jwtHelper = require('../config/jwtHelper');

const registerUrl = '/register';
const authenticateUrl = '/authenticate';
const userProfileUrl = '/userProfile';

router.post(registerUrl, ctrlUser.register);
router.post(authenticateUrl, ctrlUser.authenticate);
router.get(userProfileUrl, jwtHelper.verifyJwtToken, ctrlUser.userProfile);

module.exports = router;
