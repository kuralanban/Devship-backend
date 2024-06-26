const mongoose = require("mongoose");
const db = require("../models");

db.mongoose
  .connect(`mongodb://localhost:27017`, {
    dbName: "Devship_DB",
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Mongodb connected");
  })
  .catch((err) => {
    console.log(err);
  });
mongoose.connection.on("connected", () => {
  console.log("Conneted to db");
});
mongoose.connection.on("disconnected", () => {
  console.log("Disconneted to db");
});
