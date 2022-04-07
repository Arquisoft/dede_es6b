import PaymentList, { PropsPays } from "../components/orders/payment/PaymentList";
import { PaymentType } from "../shared/shareddtypes";


export const PaymentPage= (props:PropsPays)=> {

    return (
      <>
      <PaymentList payments={props.payments}/>
      </>
      
    );
  }