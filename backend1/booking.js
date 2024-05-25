// booking.js
const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  vehicleId: { type: mongoose.Schema.Types.ObjectId, ref: "Vehicle" },
  startDate: Date,
  endDate: Date,
  userName: String,
});

module.exports = mongoose.model("Booking", bookingSchema);
