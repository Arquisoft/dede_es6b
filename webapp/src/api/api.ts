import {ShipmentData, User} from '../shared/shareddtypes';
import {Product} from '../shared/shareddtypes';
import { CartProduct } from '../shared/shareddtypes';

export async function addUser(user:User):Promise<boolean>{
    const apiEndPoint= process.env.REACT_APP_API_URI || 'http://localhost:5000/api'
    let response = await fetch(apiEndPoint+'/users/add', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({'name':user.name, 'email':user.email})
      });
    if (response.status===200)
      return true;
    else
      return false;
}

export async function getUsers():Promise<User[]>{
    const apiEndPoint= process.env.REACT_APP_API_URI || 'http://localhost:5000/api'
    let response = await fetch(apiEndPoint+'/users/list');
    //The objects returned by the api are directly convertible to User objects
    return response.json()
}

export async function addOrder(cartProducts:Product[], price:number, direccion:string, user_id:string|undefined){
  const apiEndPoint= process.env.REACT_APP_API_URI || 'http://localhost:5000'
  let response = await fetch(apiEndPoint+'/orders/add', {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({'cartProducts':cartProducts, 'price':price, 'direccion':direccion, 'user_id':user_id})
    });

}

export async function getOrdersByUser(user_id:string|undefined){
  const apiEndPoint= process.env.REACT_APP_API_URI || 'http://localhost:5000'
  let response = await fetch(apiEndPoint + "/orders/" + user_id);
  return response.json();

}


//Devuelve los productos de la base de datos
export async function getProducts():Promise<Product[]>{
  const apiEndPoint= process.env.REACT_APP_API_URI || 'http://localhost:5000'
  let response = await fetch(apiEndPoint+'/products/list');
  //The objects returned by the api are directly convertible to Product objects
  return response.json()
}

//Productos por categoría
export async function getProductsByCategory(category: string): Promise<Product[]>{
  const apiEndPoint= process.env.REACT_APP_API_URI || 'http://localhost:5000'
  let response = await fetch(apiEndPoint + "/products/" + category);
  return response.json();
}

//Producto por código
export async function getProductByCode(code: string): Promise<Product[]>{
  const apiEndPoint= process.env.REACT_APP_API_URI || 'http://localhost:5000'
  let response = await fetch(apiEndPoint + "/products/find/" + code);
  return response.json();
}

export async function createOrder(DataOrder:ShipmentData):Promise<JSON>{
  const apiEndPoint = process.env.REACT_APP_API_URI || 'http://localhost:5000/api';
  let response = await fetch(apiEndPoint+'/createOrder',{
    method: 'POST',
    headers: {'Content-Type':'application/json'},
    body: JSON.stringify({
      'name': DataOrder.name,
      'city': DataOrder.city,
      'street': DataOrder.street,
      'zipcode': DataOrder.zipcode
    })
  });
  return response.json();
}

export async function createTransaction(DataOrder:ShipmentData):Promise<JSON>{
  const apiEndPoint = process.env.REACT_APP_API_URI || 'http://localhost:5000/api';
  let response = await fetch(apiEndPoint+'/createOrder',{
    method: 'POST',
    headers: {'Content-Type':'application/json'},
    body: JSON.stringify({
      'name': DataOrder.name,
      'city': DataOrder.city,
      'street': DataOrder.street,
      'zipcode': DataOrder.zipcode
    })
  });
  return response.json();
}



const apiEndPoint= process.env.REACT_APP_API_URI || 'http://localhost:5000/api';


    


    
