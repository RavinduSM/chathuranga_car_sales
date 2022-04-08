import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import Reserve from "../models/advancePaymentModel.js";

const reserveRouter = express.Router();

reserveRouter.get('/',  expressAsyncHandler(async (req,res) => {
    const reserve = await Reserve.find({});
    res.send(reserve);
    })
);

reserveRouter.get('/:id',  expressAsyncHandler(async (req,res) => {
    const reserve = await Reserve.findById(req.params.id);
    if(reserve){
        res.send(reserve);
    } else {
        res.status(404)
        .send({message: 'Vehicle reservation not found'});
    }    
    })
);

reserveRouter.post('/', expressAsyncHandler(async(req,res) => {
    const reserve = new Reserve({
        vehicle: req.body.vehicle,
        vehicleModel: req.body.vehicleModel,
        user: req.body.user,
        tele: req.body.tele,
        price: req.body.price,
        advancePayment: req.body.advancePayment,
        isPaid: req.body.isPaid,
        paidAt: req.body.paidAt,
        isDelivered: req.body.isDelivered,
        deliveredDate: req.body.deliveredDate,
    });
    const createReserve = await reserve.save();
    res.send({
        message: "Reservation successfull", reserve: createReserve
    });
    

}));
   
reserveRouter.delete('/:id', expressAsyncHandler(async(req,res) => {
    const reserve = await Reserve.findById(req.params.id);
    if(reserve) {
        const dltReserve = await reserve.remove();
        res.send({message: 'Reservation deleted', reserve: dltReserve});
    }else{
        res.status(404).send({message: 'Reservation not found'});
    }
}));

reserveRouter.put('/:id/deliver', expressAsyncHandler(async(req,send) => {
    const reserve = await Reserve.findById(req.params.id);
    if(reserve) {
        reserve.isDelivered = true;
        reserve.deliveredDate = Date.now();

        const updateReserve = await reserve.save();
        res.send({message: "Vehicle Purchased", reserve: updateReserve});
    } else {
        res.status(404)
        .send({message: "Reservation Not Found"});
    }
}))

export default reserveRouter;
