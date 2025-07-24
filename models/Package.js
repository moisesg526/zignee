const mongoose = require("mongoose");

const DashboardSchema = new mongoose.Schema({
  trackingNum: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  deliveryLocation: {
    type: String,
    required: true,
  },
  signature: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Package", DashboardSchema);
