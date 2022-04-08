import mongoose from 'mongoose';

const reserveVehicleSchema = new mongoose.Schema(
    {
        vehicle: {type: String, required: true },
        vehicleModel: {type: String, required: true},
        user: {type: String, required: true},
        tele: {type: String, required: true},
        price: {type: String, required: true},
        advancePayment: {type: String, required: true},
        isPaid: {type: Boolean, default: false},
        paidAt: {type: Date},
        isDelivered: {type: Boolean, default: false},
        deliveredDate: {type: Date},
    },
    {
        timestamps: true,
    }
)
// mongoose.Schema.Types.ObjectId, ref: 'Vehicle'
// mongoose.Schema.Types.ObjectId, ref: 'User'

const Reserve = mongoose.model('Reserve', reserveVehicleSchema);
export default Reserve;