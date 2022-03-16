import express, { Request, Response, Router } from 'express';

const oderRouter = express.Router()
const Order = require('../models/Order')

let bd = require('../utils/connectDB')


oderRouter.get(
    "/orders/list",
    async (req: Request, res: Response): Promise<Response> => {
        let orders = await Order.find()
        console.log(orders);
        return res.status(200).send(orders)
    }
  ); 

  export default oderRouter;