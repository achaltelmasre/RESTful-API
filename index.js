import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

import { getApiHealth } from './controllers/health.js';
import { postApiBuses, getApiBusesv1, getApiBusesv2 } from './controllers/bus.controller.js';
import { postApiBooking, getApiBookings, getApiBookingId, putApiBookingId, patchApiBookingId, deleteApiBooking } from './controllers/booking.controller.js';

const app = express();
app.use(express.json());

const connectDB = async () => {
    const conn = await mongoose.connect(process.env.MONGODB_URL);
    if (conn) {
        console.log(`MongoDB connected`);
    }
};
connectDB();

//get/ health
app.get('/health', getApiHealth);

//post/ buses
app.post('/api/buses', postApiBuses);

//get/buses/v1
app.get('/api/v1/buses', getApiBusesv1);

//get/buses/v2
app.get("/api/v2/buses", getApiBusesv2 );


//post/booking
app.post("/api/booking", postApiBooking);

//get/bookings
 app.get("/api/bookings", getApiBookings);

 //get/booking/:id
 app.get("/api/booking/:id", getApiBookingId );

app.put("/api/booking/:id", putApiBookingId);

  app.patch("/api/booking/:id", patchApiBookingId);

  app.delete("/api/booking/:id", deleteApiBooking);

  

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`)
   
});

