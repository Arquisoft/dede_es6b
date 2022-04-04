import express, { Request, Response, Router } from 'express';
import { addOrder, findAllOrders } from '../controllers/OrderController';

const orderRouter = express.Router()
const Order = require('../models/Order')

let bd = require('../utils/connectDB')

orderRouter.get("/orders/list", findAllOrders);

orderRouter.post("/order/add",addOrder);

export default orderRouter;
