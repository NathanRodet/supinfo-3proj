const { GridFsStorage } = require('multer-gridfs-storage');
const multer = require('multer');
require('dotenv/config');

const dbConnectionString = process.env.DB_CONNECTION_STRING;

const storage = new GridFsStorage({
  url: dbConnectionString,
  file: (req, file) => {
    const userJWT = req.user;
    return new Promise((resolve, reject) => {
      const fileInfo = {
        metadata: { owner_id: userJWT._id },
        filename: file.originalname,
        bucketName: 'documents'
      };
      resolve(fileInfo);
    });
  }
});

const upload = multer({ storage })

module.exports = { upload }