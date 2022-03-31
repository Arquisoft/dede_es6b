import { Grid } from "@mui/material";
import { Product } from "../../shared/shareddtypes";
//import InfiniteScroll from 'react-infinite-scroll-component';
import OrderProductItem from "./OrderProduct";

export type PropsOrder = {
    orderProducts: Product[];
}

const OrderList:React.FC<PropsOrder> = ({orderProducts}) => {

    return (
        //Cuando se calcule con la api
            <Grid container direction="column" justifyContent="flex-end" >
            <h2>Fecha de entrega</h2>
            <h3>{orderProducts.length} ITEMS</h3>
            {
                 orderProducts.map((p) => (
                    <OrderProductItem 
                        product={p}>
                    </OrderProductItem>))
            }
        </Grid>
    );
}

export default OrderList;