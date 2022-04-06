import express, { Request, Response, Router } from 'express';
import {findAllOrders, findOrdersByUserId} from '../controllers/OrderController';

const orderRouter = express.Router()
const Order = require('../models/Order')

let bd = require('../utils/connectDB')

orderRouter.get("/orders/list", findAllOrders);

orderRouter.get("/orders/list/:id", findOrdersByUserId);

  export default orderRouter;