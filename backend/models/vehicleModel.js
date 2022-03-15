import mongoose from "mongoose";

const vehicleSchema = new mongoose.Schema(
    {
        year: {type: String, required: true},
        vehicleModel: {type: String, required: true},
        bodyType: {type: String, required: true},
        transmission: {type: String, required: true},
        drivetrain: {type: String, required: true},
        engine: {type: String, required: true},
        fuelType:{type: string, required: true},
        fuelEconomy: {type: Number, required: true},
        trim: {type: string, required: true},
        mileage: {type: Number, required: true},
        interiorColor: {type: String, required: true},
        exteriorColor: {type: String, required: true},
        stockNumber: {type: string, required: true},
    },
    {
        timestamps: true,
    }
);

const Vehicle = mongoose.model('Vehicle', vehicleSchema);
export default Vehicle;
