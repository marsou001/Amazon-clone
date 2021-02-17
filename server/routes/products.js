import express from 'express';
import { getProducts, createProduct, getProduct, editProduct, deleteProduct } from '../controllers/productController.js';

const router = express.Router();

router.get('/', getProducts);
router.get('/:id', getProduct);
router.post('/', createProduct);
router.patch('/:id', editProduct);
router.delete('/:id', deleteProduct);

export default router;