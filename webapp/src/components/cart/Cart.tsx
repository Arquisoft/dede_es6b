import CartProductItem from './CartProductItem';
import { CartProduct, Product } from '../../shared/shareddtypes';

import Grid from '@mui/material/Grid';
import { Wrapper } from './Cart.styles';


export type Props = {
    cartItems: CartProduct[];
    addToCart: (clickedItem:CartProduct)=> void;
    removeFromCart: (id:string) => void;
};

const Cart:React.FC<Props> = ({cartItems, addToCart, removeFromCart})=> {
    const totalPrice = (items:CartProduct[]) =>
    items.reduce((ack:number, item) => ack + item.quantity*item.price,0);

    return (
        <Wrapper>
            <h2>TU CARRITO</h2>
            {cartItems.length>0 ? 
                    cartItems.map((c, i) => (
                    <CartProductItem 
                        key={c.id}
                        props={c} 
                        addCart ={addToCart} 
                        remove={removeFromCart}>
                    </CartProductItem>)) :
                    <p>El carrito está vacío</p>
            }
            <h2>Total: {totalPrice(cartItems).toFixed(2)}€</h2>
        </Wrapper>
    )
};

export default Cart;