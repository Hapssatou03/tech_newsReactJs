const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  username: String,
  password: String,
  token: String,
  canBookmark: Boolean,
});

const article = mongoose.model("articles", userSchema);

module.exports = article;
