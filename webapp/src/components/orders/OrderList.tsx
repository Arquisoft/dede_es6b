import { Grid } from "@mui/material";
import { Product, ShipmentData } from "../../shared/shareddtypes";
import { getAddressesFromPod } from "../../utils/Solid";
//import InfiniteScroll from 'react-infinite-scroll-component';
import OrderProductItem from "./OrderProduct";
import {useSession} from "@inrupt/solid-ui-react";
import React, { useEffect, useState } from "react";
import AddressesComboBox from "./AddressesComboBox";
import { ConstructionOutlined } from "@mui/icons-material";
import { createOrder } from "../../api/api";

export type PropsOrder = {
    orderProducts: Product[];
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