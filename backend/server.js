import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routers/userRouter.js';
import vehicleRouter from './routers/vehicleRouter.js';

const app = express();
dotenv.config();

app.use(express.json());
app.use(express.urlencoded( {extended: true}));

mongoose.connect (process.env.MongoDB_URL);

app.use('/api/users', userRouter);
app.use('/api/vehicles', vehicleRouter);

app.get('/', (req,res) => {
    res.send('Server is ready');
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Server at http://localhost:${port}`);
});