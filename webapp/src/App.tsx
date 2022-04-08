
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from './pages/HomePage';
import { LoginPage } from './pages/LoginPage';
import React, { Component, useState, useEffect } from 'react';
//import { CartProduct } from './shared/shareddtypes';
import { Product, Pedido } from './shared/shareddtypes';
import NavBar from './components/navegacion/NavBar';
import { CartPage } from './pages/CartPage';
import { getProducts, getPedidos } from './api/api';
import Pedidos  from './components/Pedidos/Pedidos';
import {
  handleIncomingRedirect,
  onSessionRestore
} from "@inrupt/solid-client-authn-browser"
import { useDispatch } from 'react-redux';
import { setLogguedStatus } from './redux/userSlice';
import { createHashHistory } from "history";
import { useSession, CombinedDataProvider, Text, LogoutButton } from "@inrupt/solid-ui-react";

function App(): JSX.Element {

  

  const [cartProducts, setCart] = useState([] as Product[]);
  const [cartOpen, setCartOpen] = useState(false);

  const [productos, setProductos] = useState<Product[]>([]);

//   debugger;
//   cartProducts.push({
//   _id:"555",
//   name: "Sudadera",
//   code:"232",
//   size:"S",
//   stock:20,
//   category:'',
//   color:1,
//   price:22,
//   imagen: "https://cdn.shopify.com/s/files/1/0190/1078/1284/products/IMG_1402_600x.jpg?v=1644447521",
//   quantity: 1
// },)


  const refreshProductList = async () => {
    setProductos(await getProducts());
    
  }

  useEffect(() => {
    refreshProductList();
    refreshPedidosList();
  }, []);

  const addToCart = (clickedItem: Product) => {
    setCart( estadoActual => {
      const estaEnElCarrito = estadoActual.find(i => i._id === clickedItem._id);
      if(!estaEnElCarrito)
        return [...estadoActual,{...clickedItem, quantity: 1}];
      return [...estadoActual];
    });
  }

  const removeFromCart = (id: string) => {
    setCart((prev) =>
      prev.reduce((ack, item) => {
        if (item._id === id) {
          if (item.quantity === 1) return ack;
          return [...ack, { ...item, quantity: item.quantity - 1 }]
        } else {
          return [...ack, item];
        }
      }, [] as Product[])
    );

  };



  const getTotalItems = (items: Product[]) =>
    items.reduce((acc, item) => acc + item.quantity, 0);


  const [pedidos, setPedidos] = useState<Pedido[]>([]);

  const refreshPedidosList = async () => {
    setPedidos(await getPedidos());
  }

  const { session } = useSession();

  return (
    <BrowserRouter>
      <NavBar getItems={getTotalItems(cartProducts)} />
      <Routes>
        <Route path="/" element={<HomePage products={productos} addToCart={addToCart} />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/cart" element={<CartPage cartItems={cartProducts}
          addToCart={addToCart}
          removeFromCart={removeFromCart} />} />
          
        <Route path="/orders/list" element={<Pedidos pedidos={pedidos} user={session.info.webId} />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;

