require("../utils/connectDB")
import { useSession} from '@inrupt/solid-ui-react';
import { Request, Response } from 'express';
import Order from '../models/Order';
import Product from '../models/Product';


var randomstring = require("randomstring");
const { session } = useSession();

export const findAllOrders = async (req: Request, res: Response): Promise<Response> => {
    const products = await Order.find({});
    return res.json(products);
};

export const addOrder = async (req: Request, res: Response) => {
    let order = new Order();
    order.code_order = randomstring.generate();
    order.user_id = session.info.webId;
    //order.products = req.body.cartProducts;
    order.price = req.body.price;
    order.direccion = req.body.direccion;
    order.date = Date.now();
    order.status = "PREPARÁNDOSE";
    
    await order.save();
    //return res.sendStatus(200);
  }