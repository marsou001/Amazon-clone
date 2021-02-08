import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import productsRouter from './routes/products.js';

dotenv.config();

const app = express();

app.use('/products', productsRouter);

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.DB, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(app.listen(PORT, () => console.log('Server is listening...')))
    .catch(_ => console.log('Something went wrong with the database!'));

