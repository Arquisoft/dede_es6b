import { Grid } from "@mui/material";
import { Product } from "../../shared/shareddtypes";
import { getAddressesFromPod } from "../../utils/Solid";
//import InfiniteScroll from 'react-infinite-scroll-component';
import OrderProductItem from "./OrderProduct";
import {useSession} from "@inrupt/solid-ui-react";
import React from "react";
import AddressesComboBox from "./AddressesComboBox";
import { ConstructionOutlined } from "@mui/icons-material";

export type PropsOrder = {
    orderProducts: Product[];
}


const OrderList:React.FC<PropsOrder> = ({orderProducts}) => {
  
    return (
        //Cuando se calcule con la api
            <Grid container direction="column" justifyContent="flex-end" >
            <h2>Fecha de entrega</h2>
            {/*
        // @ts-ignore */}
            <AddressesComboBox></AddressesComboBox>
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