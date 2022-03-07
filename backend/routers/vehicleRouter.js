import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import Vehicle from '../models/vehicleModel.js';

const vehicleRouter = express.Router();

vehicleRouter.post('/', expressAsyncHandler( async (req,res) => {
    const vehicle = new Vehicle({
        vehicleModel: req.body.vehicleModel,
        bodyType: req.body.bodyType,
        transmission: req.body.transmission,
        engine: req.body.engine,
        mileage: req.body.mileage,
        interiorColor: req.body.interiorColor,
        exteriorColor: req.body.exteriorColor,
    })
    const createVehicle = await vehicle.save();
    res.send( {message: 'Vehicle added', vehicle: createVehicle }); 
}))

export default vehicleRouter;