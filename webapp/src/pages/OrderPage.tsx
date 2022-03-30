import OrderList, { PropsOrder } from "../components/orders/OrderList";
import { Product } from "../shared/shareddtypes";


export const OrderPage= (props:PropsOrder)=> {

    return (
      <>
      <OrderList orderProducts={props.orderProducts}/>
      </>
      
    );
  }