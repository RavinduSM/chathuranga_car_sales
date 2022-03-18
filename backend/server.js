import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
import userRouter from './routers/userRouter.js';
import vehicleRouter from './routers/vehicleRouter.js';
import uploadRouter from './routers/uploadRouter.js';

const app = express();
dotenv.config();

app.use(express.json());
app.use(express.urlencoded( {extended: true}));

mongoose.connect (process.env.MongoDB_URL);

app.use('/api/users', userRouter);
app.use('/api/vehicles', vehicleRouter);
app.use('/api/uploads', uploadRouter);


const __dirname = path.resolve();
app.use('/uploads', express.static(path.join(__dirname, '/uploads')));

app.get('/', (req,res) => {
    res.send('Server is ready');
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Server at http://localhost:${port}`);
});