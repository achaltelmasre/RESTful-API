import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

import { getApiHealth } from './controllers/health.js';
import { postApiBuses, getApiBusesv1, getApiBusesv2 } from './controllers/bus.controller.js';

const app = express();
app.use(express.json());

const connectDB = async () => {
    const conn = await mongoose.connect(process.env.MONGODB_URL);
    if (conn) {
        console.log(`MongoDB connected`);
    }
};
connectDB();

app.get('/health', getApiHealth);

//post/ bus
app.post('/api/buses', postApiBuses);

app.get('/api/v1/buses', getApiBusesv1);

app.get("/api/v2/buses", getApiBusesv2 );

 app.get("/api/bookings", async (req, res)=>{
   //get all booking 
   res.json({
    success: true,
    date: [],
    message: 'Bookings fetched'
   })
 });

 app.get("/api/booking/:id", async (req, res) => {
    //get single booking
    const {id} = req.params;

    req.json({
        success: true,
        data: {
         id: id
        },
        message: 'Booking fetched'
    })
 });

app.put("/api/booking/:id", async (req, res)=>{
    //update booking
    const {id} = req.params;

    res.json({
       success: true,
       data: {
        id: id
       },
       message: 'Booking update'
    })
  });

  app.patch("/api/bookings/:id", async (req, res)=>{
    //update booking
    const {id} = req.params;

    res.json({
        success: true,
        data: {
          id: id
        },
        message: 'Booking updtate'
    })
  });

  app.delete("/api/booking/:id", async (req, res) =>{
    //delete booking
    const {id} = req.params;

    res.json({
        success: true,
        data: {
            id: id
        },
        message: 'Booking deleted'
    })
  });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`)
   
});

