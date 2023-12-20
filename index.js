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

app.post("/bookings", async (req, res) => {
    // const {} = res.body;
    // create booking

    res.json({
        success: true,
        data: {},
        message: 'Booking created'
    })
 });

 app.get("/bookings", async (req, res)=>{
   //get all booking 
   res.json({
    success: true,
    date: [],
    message: 'Bookings fetched'
   })
 })

 app.get("/bookings/:id", async (req, res) => {
    //get single booking
    const {} = req.params;
    req.json({
        success: true,
        data: {
            id: req.params.id
        },
        message: 'Booking fetched'
    })
 })

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`)
   
});

