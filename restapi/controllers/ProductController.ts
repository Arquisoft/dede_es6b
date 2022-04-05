require("../utils/connectDB")

import { Request, Response } from 'express';
import Product from '../models/Product';

export const findAllProducts = async (req: Request, res: Response): Promise<Response> => {
    const products = await Product.find({});
    return res.json(products);
};

export const findByCategory = async (req: Request, res: Response) : Promise<Response> => {
    const productos = await Product.find({ category: req.params.category });
    return res.json(productos);
};

export const findByCategoryAndSize = async (req: Request, res: Response) : Promise<Response> => {
    const productos = await Product.find({ category: req.params.category, size: req.params.size});
    return res.json(productos);
};

export const findById = async (req: Request, res: Response): Promise<Response> => {
    const products = await Product.find({_id:req.params.id});
    return res.json(products);
};

