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

export { postApiBuses }