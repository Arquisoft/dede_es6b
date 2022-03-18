import { Container } from "@mui/material";
import Cart from "../components/cart/Cart";
import Login from "../components/Login";
import NavBar from "../components/navegacion/NavBar";
import Products from "../components/Products";


export const HomePage= ( )=> {
    return (
      <>
      <Container maxWidth="sm">
        <Products/>
     </Container>
      </>
      
    );
  }
  
