import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(express.json());

const connectDB = async () => {
    const conn = await mongoose.connect(process.env.MONGODB_URL);
    if (conn) {
        console.log(`MongoDB connected`);
    }
};
connectDB();

app.get('/health', (req, res) => {
    res.send({
        success: true,
        message: 'Server is running'
    });
});

app.get('/api/v1/buses', (req, res) =>{
    res.send({
       success: true,
       data: [
        {
            id: 1,
            name: 'Bus 1',
            seats: 20,
        },
        {
            id: 2,
            name: 'Bus 2',
            seat: 20,
        }
       ],
       message: 'Buses fetched'
    });
});

app.get("/api/v2/buses", (req, res) =>{
  res.send({
    success: true,
    data: [
        {
          id: 1,
          name: 'Bus 1',
          totalSeats: 20,
        },
        {
            id: 2,
            name: 'Bus 2',
            totalSeats: 20,
        }
    ],
    message: 'Buses fetched'
  });
});

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

