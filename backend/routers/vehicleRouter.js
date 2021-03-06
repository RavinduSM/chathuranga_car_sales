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
      year: req.body.year,
      vehicleModel: req.body.vehicleModel,
      bodyType: req.body.bodyType,
      image: req.body.image,
      transmission: req.body.transmission,
      drivetrain: req.body.drivetrain,
      engine: req.body.engine,
      fuelType: req.body.fuelType,
      fuelEconomy: req.body.fuelEconomy,
      trim: req.body.trim,
      mileage: req.body.mileage,
      interiorColor: req.body.interiorColor,
      exteriorColor: req.body.exteriorColor,
      stockNumber: req.body.stockNumber,
      price: req.body.price,
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

  vehicleRouter.put('/:id', expressAsyncHandler(async(req,res) =>{
      const vehicle = await Vehicle.findById(req.params.id);
      if(vehicle) {
        vehicle.year = req.body.year;
        vehicle.vehicleModel = req.body.vehicleModel;
        vehicle.bodyType = req.body.bodyType;
        vehicle.image = req.body.image;
        vehicle.transmission = req.body.transmission;
        vehicle.drivetrain = req.body.drivetrain;
        vehicle.engine = req.body.engine;
        vehicle.fuelType = req.body.fuelType;
        vehicle.fuelEconomy = req.body.fuelEconomy;
        vehicle.trim = req.body.trim;
        vehicle.mileage = req.body.mileage;
        vehicle.interiorColor = req.body.interiorColor;
        vehicle.exteriorColor = req.body.exteriorColor;
        vehicle.stockNumber = req.body.stockNumber;
        vehicle.price = req.body.price;

        const updateVehicle = await vehicle.save();
        res.send({message: 'Vehicle Updated', vehicle: updateVehicle});
      } else {
          res
          .status(404)
          .send({message: 'Vehicle not found'});
      }
  }))

export default vehicleRouter;