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

/*export type CartProduct = {
  product: Product;
  quantity: number;
}*/
