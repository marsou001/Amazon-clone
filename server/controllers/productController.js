import mongoose from 'mongoose';
import ProductModel from '../models/ProductModel.js';

export async function getProducts(req, res) {
    try {
        const products = await ProductModel.find();

        if (!products.length) throw new Error('Sorry! no products found.');

        res.status(200).json(products);        
    } catch(e) {
        res.status(e.message === 'Sorry! no products found.' ? 404 : 500).json({ message: e.message });
    }
};

export async function createProduct(req, res) {
    const product = req.body;
    const newProduct = new ProductModel(product);
    
    try {    
        await newProduct.save();
        res.status(201).json(newProduct);
    } catch {
        res.status(500).json({ message: e.message });
    }
}

export async function getProduct(req, res) {
    const id = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json({ message: 'Sorry! No such product was found.' });

    try {
        const product = await ProductModel.findById(id);
        res.status(201).json(product);
    } catch (e) {
        res.status(500).json({ message: e.message });
    }
}

export async function editProduct(req, res) {
    const id = req.params.id;
    const productDetails = req.body;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json({ message: 'Sorry! No such product was found.' });

    try {
        const updatedProduct = await ProductModel.findByIdAndUpdate(id, productDetails, { new: true });
        res.status(201).json(updatedProduct);
    } catch (e) {
        res.status(500).json({ message: e.message });
    }
}

export async function deleteProduct(req, res) {
    const id = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json({ message: 'Sorry! No such product was found.' });

    try {
        await ProductModel.findByIdAndDelete(id);
        res.json({ message: 'Product deleted successfully' });
    } catch (e) {
        res.status(500).json({ message: e.message });
    }
}