const mongoose = require("mongoose");
const connectDatabase = () => {
  const DB_URI = "mongodb://localhost:27017/college-project"
  mongoose
    .connect(DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    })
    .then(() => console.log(`{databse is connected successfuly ${DB_URI}}`))
    .catch((err) => console.log(err))
};

module.exports = connectDatabase;
