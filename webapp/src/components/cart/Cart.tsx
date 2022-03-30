import CartProductItem from './CartProductItem';
import { Product } from '../../shared/shareddtypes';
import { useNavigate } from "react-router-dom";

import Grid from '@mui/material/Grid';
import { Wrapper } from './Cart.styles';
import { addOrder } from '../../api/api';
import { Button } from '@mui/material';



export type Props = {
    cartItems: Product[];
    addToCart: (clickedItem:Product)=> void;
    removeFromCart: (id:string) => void;
};



const Cart:React.FC<Props> = ({cartItems, addToCart, removeFromCart})=> {
    const totalPrice = (items:Product[]) =>
    items.reduce((ack:number, item) => ack + item.quantity*item.price,0);

    const navigate = useNavigate();
 
     
    return (
        <Wrapper>
            <h2>TU CARRITO</h2>
            {cartItems.length>0 ? 
                    cartItems.map((c, i) => (
                    <CartProductItem 
                        key={c._id}
                        props={c} 
                        addCart ={addToCart} 
                        remove={removeFromCart}>
                    </CartProductItem>)) :
                    <p>El carrito está vacío</p>
            }
            <h2>Total: {totalPrice(cartItems).toFixed(2)}€</h2>
            {/* <Button onClick={()=>addOrder(cartItems,totalPrice(cartItems),"Mi calle")}>
                Realizar pedido
            </Button> */}
            <Button onClick={()=> navigate('/order')}>
                Realizar pedido
            </Button>
        </Wrapper>
    )
};

export default Cart;