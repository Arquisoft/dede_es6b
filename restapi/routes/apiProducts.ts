import express, { Request, Response, Router } from 'express';
import Product from '../models/Product'

const productRouter = express.Router()

let bd = require('../utils/connectDB')



productRouter.get(
    "/products/list",
    async (req: Request, res: Response): Promise<Response> => {
        let productos = await Product.find()
        console.log(productos);
        return res.status(200).send(productos)
    }
  ); 

  productRouter.get(
    "/products/:id",
    async (req: Request, res: Response) => {
        let productos = await Product.findById(req.params.id).then(()=> res.status(200).send(productos))
    }
  ); 

  productRouter.post(
    "/products/delete",
    async (req: Request, res: Response) => {
      Product.findById(req.body.id_producto).deleteOne().exec().then(()=>{
        res.send("Eliminado")
    })
});

productRouter.post(
    "/products/add",
    async (req: Request, res: Response): Promise<Response> => {
      let producto = new Product();
      producto.name = req.body.name;
      producto.code = req.body.code;
      producto.size = req.body.size;
      producto.stock = req.body.stock;
      producto.category = req.body.category;
      producto.color = req.body.color;
      producto.price = req.body.price;
      producto.imagen = req.body.imagen;
      
      await producto.save(); 
      return res.sendStatus(200);
    }
  );

  export default productRouter;





  
