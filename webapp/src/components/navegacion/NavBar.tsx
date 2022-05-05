
import { useDispatch, useSelector } from "react-redux";
import { useSession } from "@inrupt/solid-ui-react";
import { setLogguedStatus }  from "../../redux/userSlice"
import { useEffect } from 'react';
import NavLoggedIn from "./NavLoggedIn";
import NavLoggedOut from "./NavLoggedOut";
import { Product } from "../../shared/shareddtypes";




export type CartItemsFunc = {
  getItems:number;
  function: ()=>void;
  emptyCart:()=>void;
};

export default function ButtonAppBar(props:CartItemsFunc) {
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
    return <NavLoggedIn getItems={props.getItems} function={props.function} emptyCart={props.emptyCart}></NavLoggedIn>
  }
  else{
    return <NavLoggedOut getItems={props.getItems} function={props.function} emptyCart={props.emptyCart}></NavLoggedOut>
  }
}
//