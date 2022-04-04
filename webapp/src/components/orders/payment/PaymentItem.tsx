import { PaymentType } from "../../../shared/shareddtypes";

type Payment = {
    paymentType: PaymentType
}

const PaymentItem: React.FC<Payment> = ({paymentType}) => {

    return (
        <div className="container">
            <img src={paymentType.imagen}/>
            <div className="information">
              <h2>{paymentType.name}</h2>
            </div>
        </div>
        
    );
}

export default PaymentItem;