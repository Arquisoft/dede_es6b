import express, { Application, RequestHandler } from "express";
import cors from 'cors';
import bp from 'body-parser';
import promBundle from 'express-prom-bundle';
import api from "./api"; 
import apiProducts from "./routes/apiProducts";
import apiOrders from "./routes/apiOrders";

const app: Application = express();
const port: number = 5000;

const options: cors.CorsOptions = {
  origin: ['http://localhost:3000']
};

let bd = require('./utils/connectDB')

const metricsMiddleware:RequestHandler = promBundle({includeMethod: true});
app.use(metricsMiddleware);

app.use(cors(options));
app.use(bp.json());
app.use(express.json());

app.use("/api", api)
app.use(apiProducts)
app.use(apiOrders)

app.listen(port, ():void => {
    console.log('Restapi listening on '+ port);
}).on("error",(error:Error)=>{
    console.error('Error occured: ' + error.message);
});

