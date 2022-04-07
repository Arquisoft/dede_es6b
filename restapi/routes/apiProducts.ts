import express, { Request, Response, Router } from 'express';

import {findAllProducts} from '../controllers/ProductController';
const productRouter = express.Router()
const Product = require('../models/Product')

// export const findAllProducts = async (req: Request, res: Response): Promise<Response> => {
//     const products = await Product.find({});

//     return res.json(products);
// };
// productRouter.get(
//     "/products/list",
//     async (req: Request, res: Response): Promise<Response> => {
//         let products = await Product.find({},(err,products)=>{
//             res.status(200).json(products)
//         }));
//         return res.json(products);
//     }
// );

productRouter.get("/products/list", findAllProducts);


// productRouter.get(
//     "/producto/:id",
//     async (req: Request, res: Response): Promise<Response> => {
//         let id = req.params.id;
//         let producto = await Product.findById(id).exec();
//         console.log(producto);
//         if (producto != null)
//             return res.status(400);
//         else
//             return res.status(200).send(producto)
//     }
// );


// productRouter.get(
//     "/products/category/:id",
//     async (req: Request, res: Response) => {
//         let productos = await Product.find({ categoria: req.params.categoria }).then(() => res.status(200).send(productos))
//     }
// );

// productRouter.post(
//     "/products/delete",
//     async (req: Request, res: Response) => {
//         Product.findById(req.body.id_producto).deleteOne().exec().then(() => {
//             res.send("Eliminado")
//         })
//     });


// productRouter.post(
//     "/products/add",
//     async (req: Request, res: Response): Promise<Response> => {
//         let producto = new Product();
//         producto.name = req.body.name;
//         producto.code = req.body.code;
//         producto.size = req.body.size;
//         producto.stock = req.body.stock;
//         producto.category = req.body.category;
//         producto.color = req.body.color;
//         producto.price = req.body.price;
//         producto.imagen = req.body.imagen;

//         await producto.save();
//         return res.sendStatus(200);
//     }
// );

export default productRouter;




