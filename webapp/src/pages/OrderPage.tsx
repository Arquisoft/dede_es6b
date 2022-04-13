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
  let transactionCompleted=false;


    const makeOrder = async () =>{
      if(getOrderData()!=null){
        let aux=await createOrder(getOrderData()!);
        setOrder(aux);
        return aux;
      }
      else
      setOrder(null);
    }

    const makeTransaction = async (order:any) =>{
      if(getOrderData()!=null){
        setTransaction(await createTransaction(order["rates"][0]["object_id"]));
      }
      else
        setTransaction(null);
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

    async function confirmAddress(callback:any){
      await makeOrder().then((response)=>makeTransaction(response));
      transactionCompleted=true;
    }

    function getTotal(n:number):number{
     return parseFloat(getPrecioEnvio())+n;
    }

    async function confirmOrder(){
      if(parseInt(getPrecioEnvio())!=0){
        console.log(getURL())
         addOrder(props.orderProducts,getTotal(totalPrice(props.orderProducts)),getURL(),session.info.webId)
        console.log("Order added");
        navigate('/orders/list');
        }
      }




    return (
      <>
      <OrderList orderProducts={props.orderProducts}/>
      <h5>Selecciona tu dirección o <a href={profileDocumentURI} target="_blank">crea una nueva</a> en tu pod</h5>
      <AddressesComboBox></AddressesComboBox>
      <Button onClick={()=> confirmAddress(()=>console.log(order))}>Confirmar dirección</Button>
      <div className="datos">
        <h4>Gastos de envío: {getPrecioEnvio()}€</h4> 
        <h4>Plazo de entrega: {getDeliveryTime()}</h4>
        <h3>Total: {getTotal(totalPrice(props.orderProducts)).toFixed(2)}€</h3> 
      </div>
      <Button onClick={()=>confirmOrder()}>Realizar pedido</Button>
      </>
      
    );
  }

