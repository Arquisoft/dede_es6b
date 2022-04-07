require("../utils/connectDB")

import { Request, Response } from 'express';
import Product from '../models/Product';

export const findAllProducts = async (req: Request, res: Response): Promise<Response> => {
    const products = await Product.find({});
    return res.json(products);
};

export const findByCategory = async (req: Request, res: Response) : Promise<Response> => {
    const productos = await Product.find({ category: req.params.category });
    if(productos.length==0){
        return res.send("No hay productos para dicha categoría")
    }
    return res.json(productos);
};

export const findByCategoryAndSize = async (req: Request, res: Response) : Promise<Response> => {
    const productos = await Product.find({ category: req.params.category, size: req.params.size});
    return res.json(productos);
};

export const findByCode= async (req: Request, res: Response) : Promise<Response>=> {
    const producto = await Product.findOne({code: req.params.code});
    if(producto){
        return res.json(producto);
    }
    return res.send("No existe el producto");
};





