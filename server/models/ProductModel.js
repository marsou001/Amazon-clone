import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
    title: String,
    image: String,
    description: String,
    price: Number,
    seller: String,
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

const ProductModel = mongoose.model('ProductModel', ProductSchema);

export default ProductModel;