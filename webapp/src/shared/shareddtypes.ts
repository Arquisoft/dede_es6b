export type User = {
    name:string;
    email:string;
  }

export type Product = {
    _id:string,
    name: string,
    code: string,
    size:string,
    stock:{type:number, default: 0},
    category:{type: string, enum:['Camisetas', 'Sudaderas', 'Pantalones']},
    color:number,
    price:{type:number, default: 0},
    imagen: string
}

export type CartProduct ={
    id:string,
    name: string,
    size:string,
    color:number,
    price:number,
    imagen: string,
    quantity: number

}

/*export type CartProduct = {
  product: Product;
  quantity: number;
}*/
