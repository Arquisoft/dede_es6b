import Products from "../components/Products";
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
      gender: '',
      category: '',
      colors: '',
      priceRange: '',
      rating: ''
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
        <Typography variant="h4" sx={{ mb: 5 }}>
          Products
        </Typography>

        <Stack
          direction="row"
          flexWrap="wrap-reverse"
          alignItems="center"
          justifyContent="flex-end"
          sx={{ mb: 5 }}
        >
          <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
            <Filter
              formik={formik}
              isOpenFilter={openFilter}
              onResetFilter={handleResetFilter}
              onOpenFilter={handleOpenFilter}
              onCloseFilter={handleCloseFilter}
            />
            <ProductSort />
          </Stack>
        </Stack>

        <Products products={props.products} addToCart= {props.addToCart}/>   
      </div>
      
    );
  }
  
