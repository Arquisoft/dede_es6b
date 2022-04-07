import request, {Response} from 'supertest';
import express, { Application } from 'express';
import * as http from 'http';
import bp from 'body-parser';
import cors from 'cors';
import api from '../api';
import apiProducts from '../routes/apiProducts';
import Product from '../models/Product';
import apiOrders from '../routes/apiOrders';
import { stat } from 'fs';

let app:Application;
let server:http.Server;

beforeAll(async () => {
    app = express();
    const port: number = 5000;
    const options: cors.CorsOptions = {
        origin: ['http://localhost:3000']
    };
    app.use(cors(options));
    app.use(bp.json());
    app.use("/api", api)
    app.use("/products", apiProducts)
    app.use("/orders", apiOrders)

    server = app.listen(port, ():void => {
        console.log('Restapi server for testing listening on '+ port);
    }).on("error",(error:Error)=>{
        console.error('Error occured: ' + error.message);
    });
});

afterAll(async () => {
    server.close() //close the server
})

describe('Productos ', () => {
    it('Los productos se pueden listar', async () => {
        await api
        const response:Response = await request(app).get('/products/list')
        expect(response.statusCode).toBe(200)
        expect(response.type).toEqual("application/json")
    });

    it('Encontrar por código generado no por id de la bd ', async () => {
        let code = 'suneca_s';
        await api
        const response:Response = await request(app).get('/products/find/' + code)
        expect(response.statusCode).toBe(200)
        expect(response.type).toEqual("application/json")
    });

    it('El código no existe ', async () => {
        let code = 'noExiste';
        await api
        const response:Response = await request(app).get('/products/find/' + code)
        expect(response.statusCode).toBe(200)
        expect(response.text).toEqual("No existe el producto")
    });

    it('Los productos se pueden listar por categorías', async () => {
        await api
        const response:Response = await request(app).get('/products/Sudaderas')
        expect(response.statusCode).toBe(200)
        expect(response.type).toEqual("application/json")
    });

    it('Si no existe la categoría ', async () => {
        await api
        const response:Response = await request(app).get('/products/Noexiste')
        expect(response.text).toEqual("No hay productos para dicha categoría")
    });

    /*it('Añadir un producto', async () => {
        let name:String = "productoTest"
        let code:String = "test_producto"
        let size:String = "S"
        let stock:Number = 7
        let category:String = 'Camisetas'
        let color:String = "Azul"
        let price:Number = 10.95
        let imagen:String = "Foto"
        const response:Response = await request(app).post('/products/add').send({name:name,code:code
            ,size:size,stock:stock,category:category,color:color,price:price,imagen:imagen})
        expect(response.statusCode).toBe(200);
        expect(response.text).toEqual("Añadido nuevo producto")
        // lo borramos para que no se quede almacendo en la base de datos
        //await request(app).delete('/juguete/juguete1Prueba');
    })*/
 
});


describe('Orders ', () => {
    it('Los pedidos se pueden listar', async () => {
        await api
        const response:Response = await request(app).get('/orders/list')
        expect(response.statusCode).toBe(200)
        expect(response.type).toEqual("application/json")
    });

    it('Listar pedidos para un usuario ', async () => {
        let user_id = "celiabarral1";
        await api
        const response:Response = await request(app).get('/orders/'+ user_id)
        expect(response.statusCode).toBe(200)
        expect(response.type).toEqual("application/json")
    });

    it('Un usuario no tiene pedidos ', async () => {
        let user_id = "nopedidos";
        await api
        const response:Response = await request(app).get('/orders/'+ user_id)
        expect(response.statusCode).toBe(200)
        expect(response.text).toEqual("El usuario no tiene pedidos")
    });

    it('Añadir un pedido', async () => {
        let code_order = "codigoPrueba";
        let user_id = "celiabarral";
        //order.products = req.body.cartProducts;
        let price = 150.25;
        let url = "url";
        let date = Date.now();
        let status = "PREPARÁNDOSE";
        await api
        const response:Response = await request(app).post('/orders/add').send({code_order:code_order,user_id:user_id
        ,price:price,url:url,date:date,status:status})
        expect(response.statusCode).toBe(200);
        expect(response.text).toEqual("Añadido pedido correctamente")
    });

    
});


describe('user ', () => {
    /**
     * Test that we can list users without any error.
     */
    it('can be listed',async () => {
        const response:Response = await request(app).get("/api/users/list");
        expect(response.statusCode).toBe(200);
    });

    /**
     * Tests that a user can be created through the productService without throwing any errors.
     */
    it('can be created correctly', async () => {
        let username:string = 'Pablo'
        let email:string = 'gonzalezgpablo@uniovi.es'
        const response:Response = await request(app).post('/api/users/add').send({name: username,email: email}).set('Accept', 'application/json')
        expect(response.statusCode).toBe(200);
    });
});



