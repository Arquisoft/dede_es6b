export type User = {
    name:string;
    email:string;
  }

export type Product = {
    _id:string,
    name: string,
    code: string,
    size:string,
    stock:number,
   // category:{type: string, enum:['Camisetas', 'Sudaderas', 'Pantalones']},
    category:string,
    color:string,
    price:number,
    imagen: string,
    quantity: number
}

export type CartProduct ={
    id:string,
    name: string,
    size:string,
    color:string,
    price:number,
    imagen: string,
    quantity: number

}

export type PaymentType= {
    name:string,
    imagen:string
}


export type ShipmentData = {
  name: string,
  city: string,
  street: string,
  zipcode: string
}

/*export type CartProduct = {
  product: Product;
  quantity: number;
}*/

// export type Pedido = {
//   _id:string;
//   numero_pedido:number;
//   id_usuario:string;
//   precio_total:number;
//   estado: Estado;
//   fecha:string;
//   productos:[{
//       id_producto:string,
//       cantidad:number,
//       precio:number,
//   }];
// }

// export enum Estado {
//   entregado = "Entregado",
//   reparto = "En reparto",
//   pendiente = "Pendiente",
//   listo = "Listo para repartir",
//   cancelado = "Cancelado"
// }

export type Pedido = {
  code_order: string,


  user_id: String,

  products: [{
    id_producto: String,
    quantity: Number
  }],
  price: Number,
  direccion: String,

  date: Date,
  status: String,


}