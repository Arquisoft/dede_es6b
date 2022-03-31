import { Grid } from "@mui/material";
import { PaymentType } from "../../../shared/shareddtypes";
//import InfiniteScroll from 'react-infinite-scroll-component';
import PaymentItem from "./PaymentItem";

export type PropsPays = {
    payments: PaymentType[];
}

const PaysList:React.FC<PropsPays> = ({payments}) => {

    return (
            <Grid container direction="column" justifyContent="flex-end" >
            {
                 payments.map((p) => (
                    <PaymentItem 
                        paymentType={p}>
                    </PaymentItem>))
            }
        </Grid>
    );
}

export default PaysList;