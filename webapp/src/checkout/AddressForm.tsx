import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import AddressesComboBox, { getOrderData } from '../components/orders/AddressesComboBox';
import { createOrder } from '../api/api';


export default function AddressForm() {
  const [order,setOrder] = React.useState<any>();

  
  const makeOrder = async () =>{
    if(getOrderData()!=null)
      setOrder(await createOrder(getOrderData()!));
    else
    setOrder(null);
  }



  function getPrecioEnvio():string {
      if(order != undefined){
          return order["rates"][0]["amount"];
      }
      return "0";
  }

  function getDeliveryTime(): string {
    if(order != undefined){
        return order["rates"][0]["duration_terms"]
    }
    return "no disponible";
}



  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Dirección de envío
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="given-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <AddressesComboBox></AddressesComboBox>
        </Grid>
       
      </Grid>
    </React.Fragment>
  );
}

export const makeOrder = async () =>{
  let order;
  if(getOrderData()!=null){
    order=await createOrder(getOrderData()!);
    localStorage.setItem("order", JSON.stringify(order));
    return true;
  }
  else
    return false;
}
