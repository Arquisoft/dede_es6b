import express, { Request, Response, Router } from 'express';

import {findAllProducts,findByCategory,findByCategoryAndSize, findById} from '../controllers/ProductController';
const productRouter = express.Router()
const Product = require('../models/Product')

productRouter.get("/list", findAllProducts);

productRouter.post("/add", async (req:Request,res:Response) =>{
    try{
        let producto = new Product({
            name : req.body.name,
            code: req.body.code,
            size: req.body.size,
            stock: req.body.stock,
            category: req.body.category,
            color: req.body.color,
            price: req.body.price,
            imagen: req.body.imagen,
        });
        const nuevoProducto = await producto.save(producto);
        res.send("Añadido nuevo producto")

    } catch{
        res.send("Error al añadir el producto");
    }
})


productRouter.get("/:category", findByCategory);

productRouter.get('/:id', findById);

productRouter.get("/:category/:size", findByCategoryAndSize);



export default productRouter;




