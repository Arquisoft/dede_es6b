import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import { Product } from '../shared/shareddtypes';
import { totalPrice } from '../components/cart/Cart';

const products = [
  {
    name: 'Product 1',
    desc: 'A nice thing',
    price: '$9.99',
  },
  {
    name: 'Product 2',
    desc: 'Another thing',
    price: '$3.45',
  },
  {
    name: 'Product 3',
    desc: 'Something else',
    price: '$6.51',
  },
  {
    name: 'Product 4',
    desc: 'Best thing of all',
    price: '$14.11',
  },
  { name: 'Shipping', desc: '', price: 'Free' },
];
const addresses = ['1 MUI Drive', 'Reactville', 'Anytown', '99999', 'USA'];
const payments = [
  { name: 'Card type', detail: 'Visa' },
  { name: 'Card holder', detail: 'Mr John Smith' },
  { name: 'Card number', detail: 'xxxx-xxxx-xxxx-1234' },
  { name: 'Expiry date', detail: '04/2024' },
];

export type PropsOrder = {
    orderProducts: Product[];
}

const Review:React.FC<PropsOrder> = ({orderProducts}) => {
    let name = localStorage.getItem("nombre");
    let sessionOrder=localStorage.getItem("order");
    let order=JSON.parse(sessionOrder!);


  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Resumen de pedido
      </Typography>
      <List disablePadding>
        {orderProducts.map((product) => (
          <ListItem key={product.name} sx={{ py: 1, px: 0 }}>
            <ListItemText primary={product.name} secondary={product.category} />
            <Typography variant="body2">{product.price}</Typography>
          </ListItem>
        ))}
          <ListItem sx={{ py: 1, px: 0 }}>
            <ListItemText primary="Gastos de envio"/>
            <Typography variant="body2">1</Typography>
          </ListItem>
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            {totalPrice(orderProducts)}
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Shipping
          </Typography>
          <Typography gutterBottom>{name}</Typography>
          <Typography gutterBottom>{order}</Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default Review;