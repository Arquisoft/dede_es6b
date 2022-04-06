require("../utils/connectDB")

import { Request, Response } from 'express';
import Pedido from '../models/Order';

export const findAllOrders = async (req: Request, res: Response): Promise<Response> => {
    const pedidos = await Pedido.find({});
    return res.json(pedidos);
};

export const findOrdersByUserId = async (req: Request, res: Response): Promise<Response> => {
    const pedidos = await Pedido.find({  id_usuario: req.params.id });
    return res.json(pedidos);
};


