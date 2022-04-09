const mongoose = require("mongoose");

const url =
  "mongodb+srv://dhwajsharma:dhwajsharma@cluster0.a8msw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
module.exports.connect = () => {
  mongoose
    .connect(url, {
      useNewUrlParser: true,
      // useFindAndModify: false,
      useUnifiedTopology: true,
      // useCreateIndex: true,
    })
    .then(() => console.log("MongoDB is connected successfully"))
    .catch((err) => console.log("Error: ", err));
};
