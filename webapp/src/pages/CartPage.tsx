import { Container } from "@mui/material";
import Cart, { Props } from "../components/cart/Cart";
import Login from "../components/Login";
import NavBar from "../components/navegacion/NavBar";


export const CartPage= (props:Props)=> {

    return (
      <>
      <Cart cartItems={props.cartItems}
        addToCart={props.addToCart}
        removeFromCart={props.removeFromCart} />
      </>
      
    );
  }