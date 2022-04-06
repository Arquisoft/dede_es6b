import express, { Request, Response, Router } from 'express';
import {check} from 'express-validator';

const api:Router = express.Router()
const shippo= require('shippo')('shippo_test_32df930615f38c388864bfa3d345f9b7cc41ca86');

interface User {
    name: string;
    email: string;
}

//This is not a restapi as it mantains state but it is here for
//simplicity. A database should be used instead.
let users: Array<User> = [];

api.get(
    "/users/list",
    async (req: Request, res: Response): Promise<Response> => {
        return res.status(200).send(users);
    }
);

api.post(
  "/users/add",[
    check('name').isLength({ min: 1 }).trim().escape(),
    check('email').isEmail().normalizeEmail(),
  ],
  async (req: Request, res: Response): Promise<Response> => {
    let name = req.body.name;
    let email = req.body.email;
    let user: User = {name:name,email:email}
    users.push(user);
    return res.sendStatus(200);
  }
);

api.post('/createOrder', async (req, res) =>{
  var addressFrom  = {
    "name": "Shawn Ippotle",
    "street1": "215 Clayton St.",
    "city": "San Francisco",
    "state": "CA",
    "zip": "94117",
    "country": "US"
};
var addressTo = {
    "name": req.body.name,
    "street1": req.body.street,
    "city": req.body.city,
    "state": "ES",
    "zip": req.body.zipcode,
    "country": "ES"
};
var parcel = {
    "length": "5",
    "width": "5",
    "height": "5",
    "distance_unit": "in",
    "weight": "2",
    "mass_unit": "lb"
};
shippo.shipment.create({
    "address_from": addressFrom,
    "address_to": addressTo,
    "parcels": [parcel],
    "async": false
}, function(err:any, shipment:any){
    if(err){
      return res.status(400).send(err);
    }else{
      return res.status(200).send(shipment);  
    }
});
});


export default api;