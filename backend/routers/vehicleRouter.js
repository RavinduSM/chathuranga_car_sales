import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import Vehicle from '../models/vehicleModel.js';

const vehicleRouter = express.Router();

vehicleRouter.get('/', expressAsyncHandler( async(req,res) => {
    const vehicle = await Vehicle.find({});
    res.send(vehicle);
}))

vehicleRouter.get('/:id', expressAsyncHandler( async(req,res) => {
    const vehicle = await Vehicle.findById(req.params.id);
    if(vehicle){
        res.send(vehicle);
    } else {
        res
        .status(404)
        .send({message: "Vehicle not found"});
    }
   
}))

vehicleRouter.post('/add', expressAsyncHandler( async (req,res) => {
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

vehicleRouter.delete('/:id', expressAsyncHandler(async (req, res) => {
      const vehicle = await Vehicle.findById(req.params.id);
      if (vehicle) {
        const deleteVehicle = await vehicle.remove();
        res.send({ message: 'Vehicle Deleted', vehicle: deleteVehicle });
      } else {
        res.status(404).send({ message: 'Vehicle Not Found' });
      }
    })
  );

  

export default vehicleRouter;