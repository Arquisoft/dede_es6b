require("../utils/connectDB")

import { Request, Response } from 'express';
import Order from '../models/Order';
import Product from '../models/Product';

import { createBrotliDecompress } from 'zlib';


var randomstring = require("randomstring");


export const findAllOrders = async (req: Request, res: Response): Promise<Response> => {
    const orders = await Order.find({});
    if(orders.length==0){
        return res.send("No hay pedidos")
    }
    return res.json(orders);
};

export const findOrdersByUser = async (req: Request, res: Response): Promise<Response> => {
    const orders = await Order.find({user_id:req.params.user_id});
    if(orders.length==0){
        return res.send("El usuario no tiene pedidos")
    }
    return res.json(orders);
};


export const addOrder = async (req: Request, res: Response) => {
    try{
        let order = new Order();
    order.code_order = randomstring.generate();
    order.user_id = req.body.user_id;
    //order.products = req.body.cartProducts;
    order.price = req.body.price;
    order.direccion = req.body.direccion;
    order.date = Date.now();
    order.status = "PREPARÁNDOSE";
    
    await order.save();
        res.send("Añadido pedido correctamente");
    }catch{
        res.send("Error al añadir pedido");
    }
    
  }

