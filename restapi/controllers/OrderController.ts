require("../utils/connectDB")

import { Request, Response } from 'express';
import Order from '../models/Order';
import Product from '../models/Product';
import { useSession } from "@inrupt/solid-ui-react";


var randomstring = require("randomstring");

export const findAllOrders = async (req: Request, res: Response): Promise<Response> => {
    const products = await Order.find({});
    return res.json(products);
};

export const addOrder = async (req: Request, res: Response) => {
    let order = new Order();
    order.code_order = randomstring.generate();
    //order.products = req.body.cartProducts;
    order.price = req.body.price;
    order.direccion = req.body.direccion;
    order.date = Date.now();
    order.status = "PREPARÁNDOSE";
    
    await order.save();
    //return res.sendStatus(200);
  }



