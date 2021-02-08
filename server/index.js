import express from 'express';
import mongoose from 'mongoose';
import productsRouter from './routes/products.js';

const app = express();

app.use('/products', productsRouter);

app.listen(5000, () => console.log('Serve is listening...'));
