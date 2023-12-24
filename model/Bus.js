import { Schema, model } from "mongoose";

const busSchema = new Schema({
    busName:{
        type: String,
        required: true,
    },
    busNumber:{
        type:String,
        required: true,
        unique: true,
    },
    availableSeat: {
        type:Number,
        required:true,
    },
    totalSeat:{
        type: Number,
        required:true,
    },
    bookedSeat: {
        type:Number,
        required:true,
    },
},{
    timestamps:true
})

const Bus = model('Bus', busSchema)
export default Bus