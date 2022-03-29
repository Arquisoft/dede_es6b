import CartProductItem from './CartProductItem';
import { Product } from '../../shared/shareddtypes';

import Grid from '@mui/material/Grid';
import { Wrapper } from './Cart.styles';
//import { addOrder } from '../../api/api';

import { Form  } from 'react-bootstrap';
import { addOrder } from '../../api/api';



export type Props = {
    cartItems: Product[];
    addToCart: (clickedItem:Product)=> void;
    removeFromCart: (id:string) => void;
};

const Cart:React.FC<Props> = ({cartItems, addToCart, removeFromCart})=> {
    const totalPrice = (items:Product[]) =>
    items.reduce((ack:number, item) => ack + item.quantity*item.price,0);

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
            <input type="button" onClick={()=>addOrder(cartItems,totalPrice(cartItems),"Mi calle")}>
                Realizar pedido
            </input>
        
        </Wrapper>
    )
};

export default Cart;