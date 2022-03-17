import { Button, Card, CardActions, CardContent, CardMedia, Typography, Input } from "@mui/material";
import { Product, CartProduct } from '../../shared/shareddtypes';
import Grid from '@mui/material/Grid';
import internal from "stream";

type Cart = {
    props: CartProduct;
    addCart: (p : CartProduct) => void;
    remove: (id: string)=>void;
}



const ProductCartItem: React.FC<Cart> = ({props, addCart, remove}) => {
    function restar() {
        props.quantity = props.quantity -1;
        return props.quantity;
    }

    function sumar() {
        props.quantity = props.quantity +1;
        return props.quantity;
    }


    return (
        <Card sx={{ maxWidth: 1000 }}>
            <Grid container direction="row" justifyContent="space-between" alignItems="center">
                <Grid item>
                    <CardMedia
                        component="img"
                        height="200"
                        width="400"
                        image={props.imagen}
                        alt="producto"
                    />
                </Grid>
                <Grid item>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {props.name}
                        </Typography>
                        <Typography variant="h6" component="div">
                            {props.price}€
                        </Typography>
                    </CardContent>
                    <CardActions>
                    <Button size="small" onClick={sumar}>+</Button>
                        <div>
                            <div>{props.quantity}</div>
                        </div>
                    <Button size="small" onClick={restar}>-</Button>
                    </CardActions>
                </Grid>
            
            </Grid>
        </Card>);
}

export default ProductCartItem;