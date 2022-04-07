import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { addOrder, createOrder, createTransaction } from "../api/api";
import { totalPrice } from "../components/cart/Cart";
import OrderList, { PropsOrder } from "../components/orders/OrderList";
import { Product, ShipmentData } from "../shared/shareddtypes";
import { useSession } from "@inrupt/solid-ui-react";
import { useEffect, useState } from "react";
import AddressesComboBox, { getOrderData } from "../components/orders/AddressesComboBox";


export const OrderPage= (props:PropsOrder)=> {

  const navigate = useNavigate();
  const { session } = useSession();
  const [order,setOrder] = useState<any>();
  const [transaction, setTransaction] = useState<any>();
  const profileDocumentURI = session.info.webId!;


    const makeOrder = async () =>{
      if(getOrderData()!=null)
        setOrder(await createOrder(getOrderData()!));
      else
      setOrder(null);
      console.log(order);
    }

    const makeTransaction = async () =>{
      if(getOrderData()!=null)
        setTransaction(await createTransaction(order["rates"][0]["object_id"]));
      else
        setTransaction(null);
        console.log(transaction);
    }
  
    function goToProfile(){
      window.open(profileDocumentURI);
    }

    function getPrecioEnvio():string {
        if(order != undefined){
            return order["rates"][0]["amount"];
        }
        return "0";
    }

    function getURL():string{
      if(transaction != undefined){
        return transaction["tracking_url_provider"];
    }
    return "0";
    }


    function getDeliveryTime(): string {
      if(order != undefined){
          return order["rates"][0]["duration_terms"]
      }
      return "no disponible";
  }

    function confirmAddress(){
      makeOrder();
    }

    function getTotal(n:number):number{
     return parseInt(getPrecioEnvio())+n;
    }



    return (
      <>
      <OrderList orderProducts={props.orderProducts}/>
      <h5>Selecciona tu dirección o <a href={profileDocumentURI} target="_blank">crea una nueva</a> en tu pod</h5>
      <AddressesComboBox></AddressesComboBox>
      <Button onClick={()=> confirmAddress()}>Confirmar dirección</Button>
      <div className="datos">
        <h4>Gastos de envío: {getPrecioEnvio()}€</h4> 
        <h4>Plazo de entrega: {getDeliveryTime()}</h4>
        <h3>Total: {getTotal(totalPrice(props.orderProducts)).toFixed(2)}€</h3> 
      </div>
      <Button onClick={()=>addOrder(props.orderProducts,totalPrice(props.orderProducts),"mi dirección",session.info.webId)}>Realizar pedido</Button>
      </>
      
    );
  }

