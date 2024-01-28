const mongoose = require("mongoose");

module.exports = mongoose.model(
  "sampleDB",
  new mongoose.Schema({
    GuildID: String,
  })
);
