import express, { Request, Response, Router } from 'express';
import { addOrder, findAllOrders, findOrdersByUser } from '../controllers/OrderController';

const orderRouter = express.Router()
const Order = require('../models/Order')

let bd = require('../utils/connectDB')

orderRouter.get("orders/list", findAllOrders);

orderRouter.get("/list/:id", findOrdersByUser);

orderRouter.get("/list", findAllOrders);

orderRouter.get("/:user_id",findOrdersByUser);

orderRouter.post("/add",addOrder);



export default orderRouter;
