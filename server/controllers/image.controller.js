const imageModel = require('../models/images')
const imageCtrl = {};

imageCtrl.getImages = async (req, res) =>{
    const images = await imageModel.find();
    res.json(images);
};

imageCtrl.getImageById = async (req, res) =>{
    const { id } = req.params;
    const image = await imageModel.findById(id);
    res.json(image);
};

imageCtrl.createImage = async (req, res) =>{
    const newImages = new imageModel(req.body);
    await newImages.save();
    res.json(newImages);
};

imageCtrl.editImageById = async (req, res) =>{
    const { id } = req.params;
    const image = {
        title: req.body.title,
        name: req.body.name,
        guidName: req.body.guidName
    };
    await imageModel.findByIdAndUpdate(id, {$set: image});
    res.json({
        'status': 'Image Updated'
    });
};

imageCtrl.deleteImageById = async (req, res) =>{
    const { id } = req.params;
    await imageModel.findByIdAndDelete(id);
    res.json({
        'status': 'Image Deleted'
    });
};

module.exports = imageCtrl;