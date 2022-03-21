var multer = require("multer");
const path = require("path");
var fs = require("fs");
var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    !fs.existsSync(`./uploads/`) &&
      fs.mkdirSync(`./uploads/`, { recursive: true });
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    console.log("fieldname=" + file);
    cb(
      null,
      file.originalname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

var upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype == "application/pdf" ||
      file.mimetype == "image/png" ||
      file.mimetype == "image/jpg" ||
      file.mimetype == "image/gif" ||
      file.mimetype == "image/jpeg" ||
      file.mimetype == "video/mp4" ||
      file.mimetype == "video/mpeg" ||
      file.mimetype == "video/ogg" ||
      file.mimetype == "video/x-matroska" ||
      file.mimetype == "video/webm" ||
      file.mimetype == "audio/webm" ||
      file.mimetype == "audio/wav" ||
      file.mimetype == "audio/mpeg"
    ) {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error("Only .png, .jpg and .jpeg format allowed!"));
    }
  },
  limits: {
    fileSize: 1024 * 1024 * 8, // Compliant: 8MB
  },
});
module.exports = upload;
