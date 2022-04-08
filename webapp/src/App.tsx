
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from './pages/HomePage';
import { LoginPage } from './pages/LoginPage';
import React, { Component, useState, useEffect } from 'react';
//import { CartProduct } from './shared/shareddtypes';
import {PaymentType, Product, Pedido} from './shared/shareddtypes';
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
import { OrderPage } from './pages/OrderPage';
import { PaymentPage } from './pages/PaymentPage';
import Footer from './components/footer/Footer';

function App(): JSX.Element {

  const dispatch = useDispatch();
  const history = createHashHistory();

  const [cartProducts, setCart] = useState([] as Product[]);

  const [productos, setProductos] = useState<Product[]>([]);

  const [payments, setPayments] = useState<PaymentType[]>([]);

  const refreshProductList = async () => {
    setProductos(await getProducts());
    
  }

  useEffect(() => {
    refreshProductList();
    refreshPedidosList();
  }, []);

  const addToCart = (clickedItem: Product) => {
    setCart((prev) => {
      const isItemInCart = prev.find((item) => item._id === clickedItem._id);

      if (isItemInCart) {
        return prev.map((item) =>
          item._id === clickedItem._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prev, { ...clickedItem, quantity: 1 }];
    });
  };

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
     <div className="page-container">
    <div className='content-wrapper'>
    <NavBar getItems={getTotalItems(cartProducts)}/>
    
    <Routes>
        <Route path="/" element={<HomePage products={productos} addToCart={addToCart}/>}/>
        <Route path="/login" element={<LoginPage />}/>  
        <Route path="/cart" element={<CartPage  cartItems={cartProducts}
            addToCart={addToCart}
            removeFromCart={removeFromCart}/>}/>
        <Route path="/order" element={<OrderPage orderProducts={cartProducts} />}/>
        <Route path="/pays" element={<PaymentPage  payments={payments} />}/> 
        <Route path="/orders/list" element={<Pedidos pedidos={pedidos} user={session.info.webId} />} />
    </Routes>  
    </div>
    <Footer/>
    </div>
    </BrowserRouter>
    

  );
}

export default App;

