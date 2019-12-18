const multer = require('multer')
const fs = require('fs')
const Jimp = require('jimp')

var constImageUrl = 'uploads/images/profile/'



/**
 * @description Storage setup for single image upload
 */
const singleImageStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, constImageUrl)
    },
    filename: function (req, files, cb) {
        cb(null, files.fieldname + '-' + Date.now() + '.' + makeFileExt(files.mimetype))
    }
})

const singleImageUpload = multer({ storage: singleImageStorage });

/**
 * @description Resize images
 * @param {string} imageName
 */

async function resizeImage(imageName) {
    const path = constImageUrl + imageName
    return new Promise((resolve, reject) => {
        Jimp.read(path)
        .then(lenna => {

            lenna
            .scale(.3)
            .quality(80) // set JPEG quality
            .write('uploads/images/profile/medium/'+imageName) // save

            lenna
            .scale(.3)
            .quality(50) // set JPEG quality
            .write('uploads/images/profile/small/'+imageName) // save

            resolve(true)
        })
        .catch(err => {
            reject(err)

        });
    })
}

module.exports = {
    resizeImage,
    singleImageUpload
}
