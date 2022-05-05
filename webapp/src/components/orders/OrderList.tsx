import { Grid } from "@mui/material";
import { PaymentType, Product } from "../../shared/shareddtypes";

//import InfiniteScroll from 'react-infinite-scroll-component';
import OrderProductItem from "./OrderProduct";
import React from "react";


export type PropsOrder = {
    orderProducts: Product[];
    payments: PaymentType[];
}


const OrderList:React.FC<PropsOrder> = ({orderProducts}) => {
   

    return (
        //Cuando se calcule con la api
            <Grid container direction="column" justifyContent="flex-end" >
            <h1>Confirmación de pedido</h1>
            {/*
        // @ts-ignore */}
            
            {
                 orderProducts.map((p) => (
                    <OrderProductItem 
                        product={p}>
                    </OrderProductItem>))
            }
            <p></p>
        </Grid>
    );
}


export default OrderList;