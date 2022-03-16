
import { useDispatch, useSelector } from "react-redux";
import { useSession } from "@inrupt/solid-ui-react";
import { setLogguedStatus }  from "../../redux/userSlice"
import { useEffect } from 'react';
import NavLoggedIn from "./NavLoggedIn";
import NavLoggedOut from "./NavLoggedOut";
import { CartProduct } from "../../shared/shareddtypes";
import { Props } from "../cart/Cart";



export default function ButtonAppBar( props: Props) {
  const loggued = useSelector((state: any) => state.user.logguedStatus);
  const { session } = useSession();
  const dispatch = useDispatch();
  
  useEffect(() => {
    if(session.info.isLoggedIn)
    {dispatch(setLogguedStatus(true));}
    else
    {dispatch(setLogguedStatus(false));}
  });


  if(loggued){
    return <NavLoggedIn 
    cartItems={props.cartItems}
    addToCart={props.addToCart}
    removeFromCart={props.removeFromCart}></NavLoggedIn>
  }
  else{
    return <NavLoggedOut
    cartItems={props.cartItems}
    addToCart={props.addToCart}
    removeFromCart={props.removeFromCart}></NavLoggedOut>
  }
}
