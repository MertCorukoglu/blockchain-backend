const multer = require("multer");
const path = require("path");
let fs = require("fs-extra");
const { VERSION_NOW } = require("../../../config/config");

const uploadFile = (folderName) => {
  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      //resim ayarlari
      fs.mkdirsSync(path.join(__dirname.replace(`/api/${VERSION_NOW}/utils`,``), `/uploads/${folderName}`));
      cb(null, path.join(__dirname.replace(`/api/${VERSION_NOW}/utils`,``), `/uploads/${folderName}`));
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + file.originalname.replace(/ /g, ""));
    },
  });

  const fileFilter = (req, file, cb) => {
    if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
      //resim kontroloru
      cb(null, true);
    } else {
      cb(null, false);
    }
  };

  return multer({
    storage: storage,

    fileFilter: fileFilter,
  });
};

module.exports = uploadFile;
