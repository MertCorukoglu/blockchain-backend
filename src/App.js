const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");
const { DB_CONFIG, PORT, VERSION_NOW } = require("./config/config");
const AuthRouter = require(`./api/${VERSION_NOW}/routes/auth`);
const UserRouter = require(`./api/${VERSION_NOW}/routes/user`);
const PostRouter = require(`./api/${VERSION_NOW}/routes/post`);
const UploadRouter = require(`./api/${VERSION_NOW}/routes/upload`);

mongoose.connect(
  `mongodb+srv://${DB_CONFIG.USERNAME}:${DB_CONFIG.PASSWORD}@cluster0.v8oi7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
  { useNewUrlParser: true }
);

mongoose.Promise = global.Promise;

app.use(bodyParser.json());
app.use(cors());
app.use(morgan("dev"));
app.use(express.static(__dirname));

app.use(`/${VERSION_NOW}/auth`, AuthRouter);
app.use(`/${VERSION_NOW}/user`, UserRouter);
app.use(`/${VERSION_NOW}/post`, PostRouter);
app.use(`/${VERSION_NOW}/upload`, UploadRouter);

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message, //diger hatalar
    },
  });
});

app.listen(PORT, (error, result) => {
  if (error) {
    console.log("Bir hata oluştu");
  } else {
    console.log(`Proje ${PORT} portu üzerinde çalışıyor`);
  }
});
