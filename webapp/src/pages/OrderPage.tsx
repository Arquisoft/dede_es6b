import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { addOrder } from "../api/api";
import { totalPrice } from "../components/cart/Cart";
import { getSelectedAddress } from "../components/orders/AddressesComboBox";
import OrderList, { PropsOrder } from "../components/orders/OrderList";
import { Product } from "../shared/shareddtypes";
import { useSession } from "@inrupt/solid-ui-react";


export const OrderPage= (props:PropsOrder)=> {

  const navigate = useNavigate();
  const { session } = useSession();

    return (
      <>
      <OrderList orderProducts={props.orderProducts}/>
      <Button onClick={()=> navigate('/pays')}>ELIGE MÉTODO DE PAGO</Button>
      <div className="datos">
        <h4>Gastos de envío</h4> 
        <h3>Total: {totalPrice(props.orderProducts).toFixed(2)}€</h3> 
      </div>
      <Button onClick={()=>addOrder(props.orderProducts,totalPrice(props.orderProducts),"mi dirección",session.info.webId)}>Realizar pedido</Button>
      </>
      
    );
  }