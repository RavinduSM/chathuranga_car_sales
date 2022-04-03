import mongoose from "mongoose";

const vehicleSchema = new mongoose.Schema(
    {
        year: {type: String, required: true},
        vehicleModel: {type: String, required: true},
        bodyType: {type: String, required: true},
        image: {type:String, required: true},
        transmission: {type: String, required: true},
        drivetrain: {type: String, required: true},
        engine: {type: String, required: true},
        fuelType:{type: String, required: true},
        fuelEconomy: {type: Number, required: true},
        trim: {type: String, required: true},
        mileage: {type: Number, required: true},
        interiorColor: {type: String, required: true},
        exteriorColor: {type: String, required: true},
        stockNumber: {type: String, required: true},
        price: {type: String, required: true},
    },
    {
        timestamps: true,
    }
);

const Vehicle = mongoose.model('Vehicle', vehicleSchema);
export default Vehicle;
