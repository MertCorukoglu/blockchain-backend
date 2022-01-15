const UserModel = require("../models/user");

exports.getProfile = (req, res, next) => {
  UserModel.findOne({
    _id: req.user.id,
  })
    .then((response) => {
      if (response) {
        res.json({ token: response });
      } else {
        res.json({
          message: "Kullanıcı bulunamadı",
        });
      }
    })
    .catch((err) => {
      console.log(err.message);
      res.json({
        message: "Veritabanına bağlanırken hata oluştu.",
      });
    });
};
