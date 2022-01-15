const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");
const AuthRouter = require("./routes/auth");
const UserRouter = require("./routes/user");
const { DB_CONFIG, PORT } = require("./config/config");

mongoose.connect(
  `mongodb+srv://${DB_CONFIG.USERNAME}:${DB_CONFIG.PASSWORD}@cluster0.v8oi7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
  { useNewUrlParser: true }
);

mongoose.Promise = global.Promise;

app.use(bodyParser.json());
app.use(cors());
app.use(morgan("dev"));

app.use("/comments",asdasdasd)

app.use("/auth", AuthRouter);
app.use("/user", UserRouter);

app.use((error,req,res,next) => {
  res.status(error.status || 500);
  res.json({
      error:{
              message:error.message          //diger hatalar
      }
  });
});

app.use("/", (req, res, next) => {
  res.json({
    data: "Hoşgeldiniz",
  });
});

app.listen(PORT, (error, result) => {
  if (error) {
    console.log("Bir hata oluştu");
  } else {
    console.log(`Proje ${PORT} portu üzerinde çalışıyor`);
  }
});
