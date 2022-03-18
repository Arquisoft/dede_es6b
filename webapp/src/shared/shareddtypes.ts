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
    //category:{type: string, enum:['Camisetas', 'Sudaderas', 'Pantalones']},
    color:number,
    price:number,
    imagen: string,
    quantity: number
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
