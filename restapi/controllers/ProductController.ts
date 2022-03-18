require("../utils/connectDB")

import { Request, Response } from 'express';
import Product from '../models/Product';

export const findAllProducts = async (req: Request, res: Response): Promise<Response> => {
    const products = await Product.find({});
    return res.json(products);
};