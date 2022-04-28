import express from "express";
import { findPayments } from "../controllers/PaysController";

const paysRouter = express.Router()

paysRouter.get("/", findPayments);

export default paysRouter;