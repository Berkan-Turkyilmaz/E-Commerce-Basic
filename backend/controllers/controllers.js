import mongoose from "mongoose";
import Product from "../models/ProductModel.js";

export const getProducts = async (req, res) => {

    try {
        const products = await Product.find({})
        res.status(200).json({message: "products are found", products});
    } catch (error) {
        res.status(500).json({error: error.message});
        
    }

}
export const getProduct = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: "Invalid product ID" });
    }

    try {
        const product = await Product.findById(id);
        if (!product) {
            return res.status(404).json({ error: "Product not found" });
        }

        res.status(200).json({ message: "Product found", product });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const updateProduct = async (req, res) => {
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error:"Not a valid id"})}

    const product = req.body;
    const productToUpdate = await Product.findById(id);
    if(!productToUpdate) {
        res.status(400).json({error: "Product not found"})
    }
    try {
    
        const updatedProduct = await Product.findByIdAndUpdate(id, product, {new:true})
        res.status(200).json({message: "Product updated", updatedProduct: updatedProduct})
        
    } catch (error) {
        res.status(500).json({error: error.message})
        
    }

}

export const deleteProduct = async (req, res) => {
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error:"Not a valid id"})}

    const productToDelete = await Product.findById(id);
    if(!productToDelete) {
        res.status(404).json({error:"Product doesnt exist" })
    }

    try {
        const deletedProduct = await Product.findByIdAndDelete(id)
        if(deletedProduct) {
            res.status(200).json({message:"Succesfully deleted"})
        }
    } catch (error) {
        res.status(500).json({message: "Deleting failed", error: error.message})
    }}

export const createProduct = async (req, res) => {

    const product = req.body;

    if(!product.name || !product.price || !product.image) {
        return res.status(400).json({message:"Please fill out the all fields"})
    }

    try {
        const newProduct = await Product.create(product);
        res.status(201).json({success: true, data: newProduct});
    } catch (error) {
        res.status(500).json({success: false, message: error.message})
    }

}