import express from "express";
import { findPayments } from "../controllers/PaysController";

const paysRouter = express.Router()

paysRouter.get("/payments", findPayments);

export default paysRouter;