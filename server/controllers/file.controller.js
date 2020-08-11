const fileCtrl = {};

fileCtrl.uploadFile = async (req, res) =>{
    const file = req.file;
    if (!file) {
        const error = new Error('No File')
        error.httpStatusCode = 400
        return next(error)
    }
    else{
        res.json({
            filename: file.filename,
            originalname: file.originalname
        });
    }
};

module.exports = fileCtrl;