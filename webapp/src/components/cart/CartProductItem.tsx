import { Button, Card, CardActions, CardContent, CardMedia, Typography, Input } from "@mui/material";
import { Product } from '../../shared/shareddtypes';
import Grid from '@mui/material/Grid';
import internal from "stream";
import { Wrapper } from "./CartProduct.styles";

type Cart = {
    props: Product;
    addCart: (p : Product) => void;
    remove: (id: string)=>void;
}



const ProductCartItem: React.FC<Cart> = ({props, addCart, remove}) => {


    return (
        <Wrapper>
          <div>
            <h3>{props.name}</h3>
            <div className="information">
              <p>Precio: {props.price}€</p>
              <p>Total: {(props.quantity * props.price).toFixed(2)}€</p>
            </div>
            <div className="buttons">
              <Button
                size="small"
                disableElevation
                variant="contained"
                onClick={() => remove(props._id)}
              >
                -
              </Button>
              <p>{props.quantity}</p>
              <Button
                size="small"
                disableElevation
                variant="contained"
                onClick={() => addCart(props)}
              >
                +
              </Button>
            </div>
          </div>
          <img src={props.imagen}/>
          </Wrapper>
      );
    }
export default ProductCartItem;