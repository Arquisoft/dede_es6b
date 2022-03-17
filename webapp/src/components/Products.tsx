import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import CardProduct from "./CardProduct";
import { Product } from '../shared/shareddtypes';
import { getProducts } from '../api/api';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Products() {

  const [products, setProducts] = useState<Product[]>([]);

  const refreshProductList = async () => {
    setProducts(await getProducts());
  }

  useEffect(() => {
    refreshProductList();
  }, []);
  
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
          {
              products.map(product => (
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <CardProduct key={product._id} _id={product._id} name={product.name} code={product.code} size={product.size}
                    stock={product.stock} category={product.category} color={product.color} price={product.price} imagen={product.imagen} />
              </Grid>
              ))
          }
      </Grid>
    </Box>
  );
}
