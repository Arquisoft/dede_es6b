import { Box, CardMedia, Container } from "@mui/material";
import Cart from "../components/cart/Cart";
import Login from "../components/Login";
import NavBar from "../components/navegacion/NavBar";
import NavHome from "../components/navegacion/NavHome";
import Products from "../components/products/Products";
import { Product } from "../shared/shareddtypes";

export type ProductAdd = {
  products: Product[]
  addToCart :(clickedItem:Product) => void;
}


export const HomePage= (props:ProductAdd)=> {
    return (
      <div className="HomePage">
        <Box sx={{ flexGrow: 1}}>
        </Box>
        <Products products={props.products} addToCart= {props.addToCart}/>   
      </div>
      
    );
  }
  
