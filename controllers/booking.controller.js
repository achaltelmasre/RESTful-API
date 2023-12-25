import Booking from "./../model/Booking.js";
import { responder } from "../util.js";


const postApiBooking = async (req, res) => {
    const {bus, passengerName, seatNumber, mobile, to , from} = req.body;

    const booking = new Booking({
       bus,
       passengerName,
       seatNumber,
       mobile,
       to,
       from
    });

    try{
      const savedBooking = await booking.save();

      return responder ({ 
        res, 
        success: true,
        message: 'Booking saved',
        data: savedBooking
    })
    } catch (err) {
        return responder({
            res,
            success: false,
            message: err.message
        })
      }
}


const getApiBookings = async (req, res)=>{
   const allBooking = await Booking.find();

    return responder({
        res,
        success: true,
        message: 'Successfully Bookings fetched',
        data: allBooking
    })
}

const getApiBookingId = async (req, res) => {
   
    const {id} = req.params;

  try{
    const booking = await Booking.findById({ _id: id})
    return responder({
        res,
        success: true,
        data: booking,
        message: 'Booking fetched'
    })
  }
  catch (err){
    res.json({
        success: false,
        message: err.message
    })
  }
    
}

const putApiBookingId =  async (req, res)=>{
 
    const {id} = req.params;

    const {bus, passengerName, seatNumber, mobile, to, from} = req.body;
    await Booking.updateOne({_id: id}, {$set: {
        bus: bus,
        passengerName: passengerName,
        seatNumber: seatNumber,
        mobile: mobile,
        to: to,
        from: from
    }});

    const updateBooking = await Booking.findById(id);
    return responder({  
        res,
        success: true,
        data: updateBooking,
        message: 'Booking update'
    })
}

const patchApiBookingId = async (req, res)=>{
   
    const {id} = req.params;

    const {bus, passengerName, seatNumber, mobile, to, from} = req.body;
    await Booking.updateOne({_id: id}, {$set: {
        bus: bus,
        passengerName: passengerName,
        seatNumber: seatNumber,
        mobile: mobile,
        to: to,
        from: from
    }});

    const updateBooking = await Booking.findById(id);
    return responder({  
        res,
        success: true,
        data: updateBooking,
        message: 'Booking update'
    })
}

const deleteApiBooking = async (req, res) =>{
   
    const {id} = req.params;

    await Booking.deleteOne({_id: id});
      return responder({
           res,
           success: true,
           data: {
               id: id
            },
          message: 'Booking deleted' 
      })
  
 }

   

export { postApiBooking , getApiBookings, getApiBookingId, putApiBookingId, patchApiBookingId, deleteApiBooking}