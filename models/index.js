const mongoose = require("mongoose");


const db = {};

db.mongoose = mongoose;
db.users = require(`./user.model`)(mongoose);
module.exports = db;
