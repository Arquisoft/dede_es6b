
import './App.css';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import { HomePage } from './pages/HomePage';
import { LoginPage } from './pages/LoginPage';
import React, { Component,useState, useEffect } from 'react';
import { CartProduct } from './shared/shareddtypes';
import {Product} from './shared/shareddtypes';
import NavBar from './components/navegacion/NavBar';
import { CartPage } from './pages/CartPage';

function App(): JSX.Element {

  const [cartProducts, setCart] = useState([] as CartProduct[]);
  const [cartOpen, setCartOpen] = useState(false);

  const handleAddToCart = (clickedItem: CartProduct) => {
    //"prev" es el estado previo del carrito, justo antes de añadir un producto
    setCart(prev => {
      //1. Teniamos ya el producto en el carrito
      const isItemInCart = prev.find(item => item.id ===clickedItem.id)
      if(isItemInCart) {
        return prev.map((item)=>
          item.id===clickedItem.id
          //Cogemos el objeto viejo y le aumentamos la amount. Si no tenemos el item en el carrito, el item viejo se devuelve tal y como estaba(pòrque no es el mismo)
            ? {...item, cantidad: item.quantity+1}
            : item
        );
      }
      //2. El producto no está en el carrito, tenemos que añadirlo como uno nuevo
      //Entonces lo que hacemos es retornar el estado previo (prev) y le añadimos una nueva casilla que tienen el clickedItem con un amount de 1
      return [...prev, {...clickedItem, cantidad:1}];
    })
  };

  const removeFromCart = (id: string) => {
    setCart((prev)=>
      prev.reduce((ack, item)=> {
        if(item.id===id){
          if(item.quantity===1) return ack;
          return [...ack, {...item, amount:item.quantity - 1}]
        } else {
          return [...ack, item];
        }
      },[] as CartProduct[]) 
    );

  };



  const getTotalItems = (items: CartProduct[]) =>
    items.reduce((acc, item) => acc + item.quantity, 0);



//   cartProducts.push({
//     id:"1234",
//     name: "Sudadera",
//     size:"S",
//     color:1,
//     price:22,
//     imagen: "https://cdn.shopify.com/s/files/1/0190/1078/1284/products/IMG_1402_600x.jpg?v=1644447521",
//     quantity: 1

// })


  return (
    <BrowserRouter>
    <NavBar getItems={getTotalItems(cartProducts)}/>
    <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/login" element={<LoginPage />}/>  
        <Route path="/cart" element={<CartPage  cartItems={cartProducts}
            addToCart={handleAddToCart}
            removeFromCart={removeFromCart}/>}/> 
    </Routes>    
    </BrowserRouter>
    

  );
}

export default App;

