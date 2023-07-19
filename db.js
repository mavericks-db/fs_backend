const mongoose = require("mongoose");
require("dotenv").config();

let atlas_uri = process.env.ATLAS_URI;

module.exports = {
  connectToServer: async function() {
    try {
      await mongoose.connect(atlas_uri);
    } catch (error) {
      console.error(error);
    }
  },
};
