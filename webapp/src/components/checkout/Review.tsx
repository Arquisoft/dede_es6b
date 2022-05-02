import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import { Product, ShipmentData } from '../../shared/shareddtypes';
import { useEffect, useState } from 'react';
import { totalPrice } from '../cart/Cart';


const addresses = ['1 MUI Drive', 'Reactville', 'Anytown', '99999', 'USA'];
const payments = [
  { name: 'Card type', detail: 'Visa' },
  { name: 'Card holder', detail: 'Mr John Smith' },
  { name: 'Card number', detail: 'xxxx-xxxx-xxxx-1234' },
  { name: 'Expiry date', detail: '04/2024' },
];


export default function Review() {
    const [address, setAddress] = useState<ShipmentData>();
    const [completeAddress, setCompleteAddress] = useState<String>();
    const [products, setProducts] = useState([] as Product[]);
    const [order,setOrder] = useState<any>();

    useEffect(() => {
        let sessionCart = localStorage.getItem("cartProducts");
        let prAux:Product[] = [];
        if(sessionCart)
          prAux = JSON.parse(sessionCart);
        setProducts(prAux);
        let address = localStorage.getItem("address");
        let adAux:ShipmentData;
        if(address)
          adAux = JSON.parse(address);
        setAddress(adAux!);
        let compAddress = localStorage.getItem("completeAddress");
        setCompleteAddress(compAddress!);
        let sessionOrder=localStorage.getItem("order");
        setOrder(JSON.parse(sessionOrder!));
       }, []);

       function getPrecioEnvio():string {
        console.log(order);
        if(order != undefined){
            return order["rates"][0]["amount"];
        }
        return "0";
    }

    function getTotal():string{
        let n=(totalPrice(products)+ parseFloat(getPrecioEnvio())).toFixed(2);
        localStorage.setItem("precioFinal", n.toString());
        return n.toString();
    }

      //
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Resumen de pedido
      </Typography>
      <List disablePadding>
        {products.map((product) => (
          <ListItem key={product.name} sx={{ py: 1, px: 0 }}>
            <ListItemText primary={product.name +"  —  x"+product.quantity} secondary={product.category} />
            <Typography variant="body2">{(product.price*product.quantity).toFixed(2)}€</Typography>
          </ListItem>
        ))}
        <ListItem key="gastosEnvio" sx={{ py: 1, px: 0 }}>
            <ListItemText primary="Gastos de envío"/>
            <Typography variant="body2" >{getPrecioEnvio()}€</Typography>
          </ListItem>
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            {getTotal()}€
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={10}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Envío
          </Typography>
          <Typography gutterBottom>{completeAddress}</Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}