
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import CardProduct from "./CardProduct";
import { ProductAdd } from '../../pages/HomePage';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Products(product:ProductAdd) {
  
  return (
    <Grid 
    container rowSpacing={4} marginTop={2} marginLeft={5} marginBottom={4}>
    {product.products.map((p, i) => (
          <Grid item xs={2} sm={4} md={3} key={i}  >
              <CardProduct product={p} addToCart= {product.addToCart}  ></CardProduct>
          </Grid>
      ))}
      
    </Grid>
  );
}
