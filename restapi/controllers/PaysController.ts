import Payment from "../models/Payment";
import express, { Request, Response, Router } from 'express';
require("../utils/connectDB")

export const findPayments = async (req: Request, res: Response): Promise<Response> => {
    const pays = await Payment.find({});
    if(pays.length==0){
        return res.send("No hay métodos de pago disponibles")
    }
    return res.json(pays);
};