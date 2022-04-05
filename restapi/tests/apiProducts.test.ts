import request, {Response} from 'supertest';
import express, { Application } from 'express';
import * as http from 'http';
import bp from 'body-parser';
import cors from 'cors';
import api from '../routes/apiProducts';
import Product from '../models/Product';


let app:Application;
let server:http.Server;

const mongoose = require("mongoose");
const uri = "mongodb+srv://asw:dede@cluster0.elc5r.mongodb.net/dede?retryWrites=true&w=majority";

beforeAll(async () => {
    app = express();
    const port: number = 5000;
    const options: cors.CorsOptions = {
        origin: ['http://localhost:3000']
    };
    app.use(cors(options));
    app.use(bp.json());
    app.use("/products", api)

    server = app.listen(port, ():void => {
        console.log('Restapi server for testing listening on '+ port);
    }).on("error",(error:Error)=>{
        console.error('Error occured: ' + error.message);
    });

    mongoose.connect(uri);
});

afterAll(async () => {
    server.close() //close the server
    mongoose.connection.close();
})

describe('Listar los productos ', () => {

    /*
     * Test that we can list all the products without any error.
     */
     it('Se pueden listar',async () => {
         const response:Response = await request(app).get("/products/list");
        expect(response.statusCode).toBe(200);
    });
});

describe('Productos ', () => {

    /*
    *test que comprueba que se obtiene un elemento en concreto
    */
     it('Obtener un producto por id', async () => {
        let id = '6230c212fc59abc2a32e47d0';
        const response:Response =await request(server).get("/products/"+ id);
        expect(response.statusCode).toBe(200);
        console.log(response.body);
       
    });
    
});








