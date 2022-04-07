import { Container } from "@mui/material";
import Cart from "../components/cart/Cart";
import Login from "../components/Login";
import NavBar from "../components/navegacion/NavBar";
import Products from "../components/products/Products";
import { Product } from "../shared/shareddtypes";

import { useFormik } from 'formik';
import { useState } from 'react';
// material
import { Stack, Typography } from '@mui/material';
// components
import Filter from "../components/filter/Filter";
import ProductSort from "../components/filter/ProductSort";

export type ProductAdd = {
  products: Product[]
  addToCart :(clickedItem:Product) => void;
}


export const HomePage= (props:ProductAdd)=> {
  const [openFilter, setOpenFilter] = useState(false);

  const formik = useFormik({
    initialValues: {
      category: '',
      colors: '',
      priceRange: ''
    },
    onSubmit: () => {
      setOpenFilter(false);
    }
  });

  const { resetForm, handleSubmit } = formik;

  const handleOpenFilter = () => {
    setOpenFilter(true);
  };

  const handleCloseFilter = () => {
    setOpenFilter(false);
  };

  const handleResetFilter = () => {
    handleSubmit();
    resetForm();
  };

    return (
      <div className="HomePage">

        <Stack
          direction="row"
          flexWrap="wrap-reverse"
          alignItems="center"
          justifyContent="flex-end"
          sx={{ mb: 5 }}
        >
          <Stack direction="row" spacing={2} flexShrink={0} sx={{ my: 0 }}>
            <Filter
              formik={formik}
              isOpenFilter={openFilter}
              onResetFilter={handleResetFilter}
              onOpenFilter={handleOpenFilter}
              onCloseFilter={handleCloseFilter}
              products={props.products}
            />
          </Stack>
        </Stack>

        <Products products={props.products} addToCart= {props.addToCart}/>   
      </div>
      
    );
  }
  
