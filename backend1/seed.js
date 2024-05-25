const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const vehicleRoutes = require("./vehicleRoutes");
const bookingRoutes = require("./bookingRoutes");

const app = express();
const PORT = 3300;

// Middleware
app.use(express.json());
app.use(cors());
// Routes
app.use("/api/vehicles", vehicleRoutes);
app.use("/api/bookings", bookingRoutes);

// MongoDB connection
mongoose.connect(
  "mongodb+srv://harshalg:jIUmTYRS86P0aD08@app.wen0ngb.mongodb.net/vehicleRental"
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
