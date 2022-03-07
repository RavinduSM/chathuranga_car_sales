import express from 'express';
import expresssAsyncHandler from 'express-async-handler';
import User from "../models/userModel.js";
import bcrypt from 'bcryptjs';
import {generateToken} from '../utils.js';

const userRouter = express.Router();

userRouter.post('/register', expresssAsyncHandler(async (req,res) =>{
    const user = new User ({
        name: req.body.name,
        email: req.body.email,
        telephone: req.body.telephone,
        password: bcrypt.hashSync(req.body.password, 8),
    });
    const createUser = await user.save();
    res.send({
        message: 'User added', user: createUser,        
    });
}));

userRouter.post('/signin', expresssAsyncHandler (async (req,res) => {
    const user = await User.findOne({email: req.body.email});
    if (user){
        if (bcrypt.compareSync(req.body.password, user.password)){
            res.send({
                id: user.id,
                name: user.name,
                email: user.email,
                telephone: user.telephone,
                isAdmin: user.isAdmin,
                token: generateToken(user),
            })
            return;
        }
    }
    res.status(401).send({ message: "invalid email or password"});
}))

export default userRouter;