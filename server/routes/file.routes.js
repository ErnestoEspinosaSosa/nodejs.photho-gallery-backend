const express = require('express');
const router = express.Router();
const jwtHelper = require('../config/jwtHelper');

const multer = require('multer');
const path = require('path');

const fileCtrl = require('../controllers/file.controller');
const uploadImageUrl = '/upload-image';

const upload = multer({
    dest: path.join(__dirname, '..','public','upload-image')
}).single('image');
router.post(uploadImageUrl, upload, jwtHelper.verifyJwtToken, fileCtrl.uploadFile);

module.exports = router;