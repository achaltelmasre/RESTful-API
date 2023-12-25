import Bus from "./../model/Bus.js";
import { responder } from "../util.js";

//post/ buses
const postApiBuses = async (req, res) => {
    const {busName, busNumber,  availableSeat, totalSeat,  bookedSeat} = req.body;

    const bus = new Bus({
        busName,
        busNumber,
        availableSeat,
        totalSeat,
        bookedSeat
    });

    try {
        const savedBus = await bus.save();
        
        return responder ({
            res, 
            success: true,
            message: 'Buses saved',
            data: savedBus
        })
    } catch (err) {
        return responder({
            res, 
            success: false,
            message:err.message
        })
    }
}

//get/buses/v1
const getApiBusesv1 = async  (req, res) =>{
    return responder({
         res,
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
}

//get/buses/v1
const getApiBusesv2 = async (req, res) =>{
     return responder({
          res,
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
     })
   
  }



export { postApiBuses, getApiBusesv1, getApiBusesv2 }