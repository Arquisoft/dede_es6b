import express, { Request, Response, Router } from 'express';

import {findAllProducts,findByCategory,findByCategoryAndSize, findByCode} from '../controllers/ProductController';
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

productRouter.get('/find/:code', findByCode);

productRouter.get("/:category/:size", findByCategoryAndSize);




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




