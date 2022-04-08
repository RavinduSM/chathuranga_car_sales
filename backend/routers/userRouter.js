import express from 'express';
import expresssAsyncHandler from 'express-async-handler';
import User from "../models/userModel.js";
import bcrypt from 'bcryptjs';
import {generateToken, isAdmin, isAuth, isCustomer} from '../utils.js';

const userRouter = express.Router();

userRouter.post('/register', expresssAsyncHandler(async (req,res) =>{
    const user = new User ({
        username: req.body.username,
        email: req.body.email,
        telephone: req.body.telephone,
        password: bcrypt.hashSync(req.body.password, 8),
        isCustomer: true,
    });
    const createUser = await user.save();
    res.send({
        _id: createUser._id,
        username: createUser.username,
        email: req.body.email,
        telephone: createUser.telephone,
        isAdmin: createUser.isAdmin,
        isCustomer: createUser.isAdmin,
        token: generateToken(createUser),
    });
}));

userRouter.post('/signin', expresssAsyncHandler (async (req,res) => {
    const user = await User.findOne({email: req.body.email});
    if (user){
        if (bcrypt.compareSync(req.body.password, user.password)){
            res.send({
                id: user.id,
                username: user.username,
                email: user.email,
                telephone: user.telephone,
                isAdmin: user.isAdmin,
                isCustomer: user.isCustomer,
                token: generateToken(user),
            })
            return;
        }
    }
    res.status(401).send({ message: "invalid email or password"});
}))

userRouter.post('/:id', isAuth, isAdmin,
    expresssAsyncHandler (async (req,res) =>{
        const user = await User.findById(req.user._id);
        if(user){
            user.name = req.body.name || user.name;
            user.email = req.body.email || user.email;
            user.telephone = req.body.telephone || user.telephone;
            user.address = req.body.address || user.address;            
   
        }       
        const updateUser = await user.save();
        res.send({
            _id: updateUser._id,
            name: updateUser.name,
            email: updateUser.email,
            address: updateUser.address,
            telephone: updateUser.telephone,
            isAdmin: updateUser.isAdmin,
            token: generateToken(updateUser),
        });
    })    
);

userRouter.get('/',  expresssAsyncHandler(async (req,res) => {
    const users = await User.find({});
    res.send(users);
    })
);

userRouter.get('/:id', isAuth, expresssAsyncHandler (async (req, res) => {
    const user = await User.findById(req.params.id);
    if(!user){
        res.status(404)
        .send({message: 'User Not Found'});
    }else {
        res.send(user);
    }
}))

userRouter.delete(
    '/:id',
    isAuth,
    isAdmin,
    expresssAsyncHandler(async (req, res) => {
      const user = await Product.findById(req.params.id);
      if (user) {
        const deleteUser = await user.remove();
        res.send({ message: 'Customer Deleted', user: deleteUser });
      } else {
        res.status(404).send({ message: 'Customer Not Found' });
      }
    })
  );

export default userRouter;