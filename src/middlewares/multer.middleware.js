import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/temp")
  },
  filename: function (req, file, cb) {
   /* const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9) */
    cb(null, file.originalname) // needs to be updated in further upgrade as it can have multiple same file names..tho it will be short period of time in server but still..
  }
})

export const upload = multer({ storage, })