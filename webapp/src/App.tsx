
import './App.css';
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { HomePage } from './pages/HomePage';
import { LoginPage } from './pages/LoginPage';
import { useState, useEffect } from 'react';
//import { CartProduct } from './shared/shareddtypes';
import {Product, Pedido} from './shared/shareddtypes';
import NavBar from './components/navegacion/NavBar';
import { CartPage } from './pages/CartPage';
import { getProducts, getPedidos, getProductsByCategory} from './api/api';
import Pedidos  from './components/Pedidos/Pedidos';
import {
  handleIncomingRedirect,
  onSessionRestore
} from "@inrupt/solid-client-authn-browser"
import { useDispatch } from 'react-redux';
import { setLogguedStatus } from './redux/userSlice';
import {  } from "history";
import { useSession } from "@inrupt/solid-ui-react";
import Footer from './components/footer/Footer';
import Checkout from './pages/Checkout';
import { ContactPage } from './pages/ContactPage';
import { PromotionsPage } from './pages/PromotionsPage';


function App(): JSX.Element {



  const [cartProducts, setCart] = useState([] as Product[]);

  const dispatch = useDispatch();

  const navigate=useNavigate();
  const location=useLocation();

  const [productos, setProductos] = useState<Product[]>([]);

  
  const [pedidos, setPedidos] = useState<Pedido[]>([]);


  const categorys= ["Sudaderas", "Pantalones", "Camisetas", "Calzado", "Accesorios"]



  const refreshProductList = async () => {
    setProductos(await getProducts());
  }

  const refreshPedidosList = async () => {
    setPedidos(await getPedidos());
  }


  const refreshProductListCategory = async (category:string) => {
    setProductos(await getProductsByCategory(category));
    
  }

  


  useEffect(() => {
    if(location.pathname!=="/")
       localStorage.setItem("lastLocation", location.pathname);
    onSessionRestore(() => {
      if(localStorage.getItem("lastLocation"))
        navigate(localStorage.getItem("lastLocation")!);
      else{
        navigate("/");
      }
      localStorage.removeItem("lastLocation");
  })
    refreshProductList();
    refreshPedidosList();
  }, []);

  


useEffect(() => {
    document.title = "DeDe";
    handleIncomingRedirect({
        restorePreviousSession: true
    }).then(() => {
        dispatch(setLogguedStatus(true));
    });
}, [dispatch]);

useEffect(() => {
  let sessionCart = localStorage.getItem("cartProducts");
  let aux:Product[] = [];
  if(sessionCart)
    aux = JSON.parse(sessionCart);
  setCart(aux);
 }, []);
//

  
const addToCart = (clickedItem: Product) => {
  let cart = loadCart();
  let cartProducts = cart.slice();
  let isInCart: boolean = false;
    for(let i=0; i< cartProducts.length; i++){
      if(cartProducts[i]._id === clickedItem._id){
        cartProducts[i].quantity += 1;
        isInCart = true;
      }
    }
    if(!isInCart){
      clickedItem.quantity=1;
      var p:Product = clickedItem;
      cartProducts.push(p);
    }

    localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
    setCart(cartProducts);
};

const emptyCart=() => {
  localStorage.setItem("cartProducts", JSON.stringify([]));
  setCart([]);
};

const removeFromCart = (id: string) => {
  let cart = loadCart();
  let cartProducts = cart.slice();
  let isInCart: boolean = false;
  for(let i=0; i<= cartProducts.length; i++){
    if(!isInCart)
      if(cartProducts[i]._id === id){
        isInCart = true;
        cartProducts[i].quantity -= 1;
        if (cartProducts[i].quantity === 0)
            cartProducts.splice(i, 1);
      }
  }

  localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
  setCart(cartProducts);
};


function loadCart():Product[] {
  let sessionCart = localStorage.getItem("cartProducts");

  let cartProducts:Product[] = [];
  if(sessionCart)
      cartProducts = JSON.parse(sessionCart);
  return cartProducts;
}


  const getTotalItems = (items: Product[]) =>
    items.reduce((acc, item) => acc + item.quantity, 0);
  const { session } = useSession();

  return (
   
    
     <div className="page-container">
    <div className='content-wrapper'>
    <NavBar getItems={getTotalItems(cartProducts)} function={refreshProductList} emptyCart={emptyCart}/>
    
    <Routes>
        <Route path="/" element={<HomePage products={productos} addToCart={addToCart} function={refreshProductListCategory} categorys={categorys}/>}/>
        <Route path="/login" element={<LoginPage />}/>  
        <Route path="/cart" element={<CartPage  cartItems={cartProducts}
            addToCart={addToCart}
            removeFromCart={removeFromCart}/>}/>
        <Route path="/order" element={<Checkout emptyCart={emptyCart}/>}/>
        <Route path="/orders/list" element={<Pedidos/>} />
        <Route path="/contactPage" element={<ContactPage function={refreshProductListCategory} categorys={categorys}/>}/>
        <Route path="/promotions" element={<PromotionsPage function={refreshProductListCategory} categorys={categorys}/>}/>
    </Routes>  
    </div>
    <Footer/>
    </div>
    

  );
}

export default App;

