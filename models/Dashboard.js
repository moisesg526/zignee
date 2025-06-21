const mongoose = require("mongoose");

const DashboardSchema = new mongoose.Schema({
  package: {
    type: String,
    required: true,
  },
  delivered: {
    type: Boolean,
    required: true,
  },
});
