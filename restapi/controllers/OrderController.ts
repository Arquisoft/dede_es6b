require("../utils/connectDB")

import { Request, Response } from 'express';
import Pedido  from '../models/Order';

import Order from '../models/Order';

export const findOrdersByUserId = async (req: Request, res: Response): Promise<Response> => {
    const pedidos = await Pedido.find({  id_usuario: req.params.id });
    return res.json(pedidos);
};




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

const formatDate = (date:Date)=>{
    let formatted_date = date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear()
     return formatted_date;
}

export const addOrder = async (req: Request, res: Response) => {
   try{
        let order = new Order();
        order.code_order = randomstring.generate();
        order.user_id = req.body.user_id;
        order.products = req.body.cartProducts;
        //Actualizar el stock
        order.price = req.body.price;
        order.url = req.body.url;
        order.date = formatDate(new Date());
        order.status = "PREPARÁNDOSE";
    
    await order.save();
        res.send("Añadido pedido correctamente");
    }catch{
        res.send("Error al añadir pedido");
    }
    
  }

function p(p: any, arg1: (Product: any) => void) {
    throw new Error('Function not implemented.');
}

