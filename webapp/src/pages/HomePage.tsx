
import NavFilter from "../components/navegacion/NavFilter";
import Products from "../components/products/Products";
import { Product } from "../shared/shareddtypes";

export type ProductAdd = {
  products: Product[]
  addToCart :(clickedItem:Product) => void;
  categorys:string[];
  function: (s:string) => void;
}



export const HomePage= (props:ProductAdd)=> {
    return (
      <div className="HomePage">
        <NavFilter function={props.function} categorys={props.categorys}></NavFilter>
        <Products products={props.products} addToCart={props.addToCart} categorys={[]} function={function (s: string): void {
          throw new Error("Function not implemented.");
        } }/>   
      </div>
      
    );
  }


  
