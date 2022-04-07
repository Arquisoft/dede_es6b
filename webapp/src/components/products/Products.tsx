import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import CardProduct from "./CardProduct";
import { Product } from '../../shared/shareddtypes';
import { getProducts } from '../../api/api';
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
    <Grid container
    spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}
    rowSpacing={5} marginTop={2}
  >
    {product.products.map((p, i) => (
          <Grid item xs={2} sm={4} md={3} key={i} >
              <CardProduct product={p} addToCart= {product.addToCart}></CardProduct>
          </Grid>
      ))}
      
    </Grid>
  );
}
