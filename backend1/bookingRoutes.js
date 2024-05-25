const express = require("express");
const Booking = require("./booking");
const router = express.Router();

// POST route to create a new booking
router.post("/", async (req, res) => {
  const { vehicleId, startDate, endDate, userName } = req.body;

  const overlappingBooking = await Booking.findOne({
    vehicleId,
    $or: [
      { startDate: { $lte: endDate, $gte: startDate } },
      { endDate: { $lte: endDate, $gte: startDate } },
    ],
  });

  if (overlappingBooking) {
    return res
      .status(400)
      .json({ message: "Vehicle already booked for these dates" });
  }

  const booking = new Booking({ vehicleId, startDate, endDate, userName });
  await booking.save();
  res.status(201).json(booking);
});

// GET route to fetch all bookings
router.get("/", async (req, res) => {
  const bookings = await Booking.find().populate("vehicleId");
  res.json(bookings);
});

module.exports = router;
