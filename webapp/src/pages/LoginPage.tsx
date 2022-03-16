import { Container } from "@mui/material";
import Login from "../components/Login";
import NavBar from "../components/navegacion/NavBar";


export const LoginPage= ()=> {

    return (
      <>
      <NavBar/>
        <Container maxWidth="sm">
        <Login/>
     </Container>
      </>
      
    );
  }
  
