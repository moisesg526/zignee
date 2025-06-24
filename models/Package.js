const mongoose = require("mongoose");

const DashboardSchema = new mongoose.Schema({
  trackingNo: {
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
  signatureConfirmation: {
    type: String,
    required: true,
  },
});
