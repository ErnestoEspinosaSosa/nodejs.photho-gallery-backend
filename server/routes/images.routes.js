const express = require('express');
const router = express.Router();
const jwtHelper = require('../config/jwtHelper');

const imageCtrl = require('../controllers/image.controller');

const imageUrl = '/images';


router.get(imageUrl, jwtHelper.verifyJwtToken, imageCtrl.getImages);
router.get(imageUrl+ '/:id', jwtHelper.verifyJwtToken, imageCtrl.getImageById);
router.post(imageUrl, jwtHelper.verifyJwtToken, imageCtrl.createImage);
router.put(imageUrl+ '/:id', jwtHelper.verifyJwtToken, imageCtrl.editImageById);
router.delete(imageUrl + '/:id', jwtHelper.verifyJwtToken, imageCtrl.deleteImageById);

module.exports = router;