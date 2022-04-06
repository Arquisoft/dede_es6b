import express, { Request, Response, Router } from 'express';
import { addOrder, findAllOrders } from '../controllers/OrderController';

const orderRouter = express.Router()
const Order = require('../models/Order')

let bd = require('../utils/connectDB')

orderRouter.get("/list", findAllOrders);

orderRouter.post("/add",addOrder);

export default orderRouter;
