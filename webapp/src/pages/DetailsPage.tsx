import { Container } from "@mui/material";
import Cart from "../components/cart/Cart";
import Login from "../components/Login";
import NavBar from "../components/navegacion/NavBar";
import NavFilter from "../components/navegacion/NavFilter";
import Products from "../components/products/Products";
import DetallesProducto from "../components/products/DetallesProducto";
import { Product } from "../shared/shareddtypes";


export type ProductAdd = {
  products: Product[]
  addToCart :(clickedItem:Product) => void;
  categorys:string[];
  function: (s:string) => void;
}



export const DetailsPage= (props:ProductAdd)=> {
    return (
      <div className="DetailsPage">
        <NavFilter function={props.function} categorys={props.categorys}></NavFilter>
        <DetallesProducto addToCart={props.addToCart}/>   
      </div>
      
    );
  }


  
