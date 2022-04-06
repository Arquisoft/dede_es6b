import request, {Response} from 'supertest';
import express, { Application } from 'express';
import * as http from 'http';
import bp from 'body-parser';
import cors from 'cors';
import api from '../api';
import apiProducts from '../routes/apiProducts';
import Product from '../models/Product';

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

    it('Añadir un producto', async () => {
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
    })


    /*it('Id no existe ', async () => {
        const response: Response = await request(app).get('/products/NoExiste');
        expect(response.text).toEqual("El producto no existe")
    });*/


    
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

