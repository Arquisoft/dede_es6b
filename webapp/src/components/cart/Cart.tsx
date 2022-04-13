import CartProductItem from './CartProductItem';
import { Product } from '../../shared/shareddtypes';
import { useNavigate } from "react-router-dom";

import Grid from '@mui/material/Grid';
import { Wrapper } from './Cart.styles';
import { Button } from '@mui/material';
import React from 'react';
import { useSession } from '@inrupt/solid-ui-react';



export type Props = {
    cartItems: Product[];
    addToCart: (clickedItem:Product)=> void;
    removeFromCart: (id:string) => void;
};

export const totalPrice = (items:Product[]) =>
    items.reduce((ack:number, item) => ack + item.quantity*item.price,0);

const Cart:React.FC<Props> = ({cartItems, addToCart, removeFromCart})=> {
    

    const navigate = useNavigate();
    const { session } = useSession();
    

     
    return (
        <Wrapper>
            <h2>TU CARRITO</h2>
            {cartItems.length>0 ? cartItems.map((c, i) => (
                    <CartProductItem 
                        key={c._id}
                        props={c} 
                        addCart ={addToCart} 
                        remove={removeFromCart}>
                    </CartProductItem>)):
                    <p>El carrito está vacío</p>
            }
            <h2>Total: {totalPrice(cartItems).toFixed(2)}€</h2>
            <Button disabled={cartItems.length>0 ? false : true } onClick={()=>{ if(session.info.isLoggedIn)
            navigate('/order');
        else
            navigate('/login')}}>
               Continuar compra
            </Button>
        </Wrapper>
    )
};

export default Cart;