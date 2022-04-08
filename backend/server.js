import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
import userRouter from './routers/userRouter.js';
import vehicleRouter from './routers/vehicleRouter.js';
import uploadRouter from './routers/uploadRouter.js';
import reserveRouter from './routers/reserveRouter.js';
import messageRouter from './routers/messageRouter.js';

const app = express();
dotenv.config();

app.use(express.json());
app.use(express.urlencoded( {extended: true}));

mongoose.connect (process.env.MongoDB_URL);

app.use('/api/users', userRouter);
app.use('/api/vehicles', vehicleRouter);
app.use('/api/uploads', uploadRouter);
app.use('/api/reserves', reserveRouter);
app.use('/api/messages', messageRouter);


const __dirname = path.resolve();
app.use('/uploads', express.static(path.join(__dirname, '/uploads')));

app.get('/', (req,res) => {
    res.send('Server is ready');
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Server at http://localhost:${port}`);
});