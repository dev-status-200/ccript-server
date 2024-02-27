const Product = require('../models/productModel');

exports.getAll = async (req, res) => {
    try {
        const result = await Product.find();
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({message:error.message});
    }
};

exports.create = async (req, res) => {
    try {
        const result = await Product.create(req.body);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({message:error.message});
    }
};

exports.update = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await Product.findByIdAndUpdate(id, req.body);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({message:error.message});
    }
};

exports.delete = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await Product.findByIdAndDelete(id);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({message:error.message});
    }
};