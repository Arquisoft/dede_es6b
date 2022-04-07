import '@testing-library/jest-dom/extend-expect';
import {fireEvent, render} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Login from '../components/Login';
import NavLoggedIn from "../components/navegacion/NavLoggedIn";
import { Product } from '../shared/shareddtypes';
import Cart from "../components/cart/Cart";
import { useState } from 'react';

test('login renderizado', () => {
    const component = render(<Login/>)
    expect(component.container).toHaveTextContent('Log In')
})

test('click al Log Out del NavBar', () => {
    const component = render(<NavLoggedIn getItems={1}/>)
    const mockHandler = jest.fn()
    const button = component.getByText('Log Out')
    fireEvent.click(button)
    expect(mockHandler).toHaveBeenCalledTimes(1)
})

test('carrito renderizado', ()=> {
    const producto = {
        _id: "0",
        name: "Nike amarilla",
        code: "123",
        size: "S",
        stock: 5,
        category: "Sudadera",
        color: "rojo",
        price: 3,
        imagen: "vacio",
        quantity: 2,
    }
    const productos: Product[] = [producto];
    const component = render(<Cart cartItems={productos} addToCart={() => {}} removeFromCart={() => {}}/>)

    expect(component.container).toHaveTextContent(producto.name);
    expect(component.container).toHaveTextContent(producto.code);
})

test('click al botón de eliminar del carrito',() =>{
    const producto = {
        _id: "0",
        name: "Nike amarilla",
        code: "123",
        size: "S",
        stock: 5,
        category: "Sudadera",
        color: "rojo",
        price: 3,
        imagen: "no hay",
        quantity: 2,
    }
    const productos: Product[] = [producto];

    const mockHandler = jest.fn();
    const component = render(<Cart cartItems={productos} addToCart={() => {}} removeFromCart={mockHandler}/>)
    const button = component.container.querySelectorAll('button');

    if (button[0] !== null) {
        fireEvent.click(button[0]);
    }
    expect(mockHandler).toHaveBeenCalledTimes(1)

})

test('click al botón de añadir al carrito',() =>{
    const producto = {
        _id: "0",
        name: "Nike amarilla",
        code: "123",
        size: "S",
        stock: 5,
        category: "Sudadera",
        color: "rojo",
        price: 3,
        imagen: "no hay",
        quantity: 2,
    }
    const productos: Product[] = [producto];

    const mockHandler = jest.fn();

    const component = render(<Cart cartItems={productos} addToCart={mockHandler} removeFromCart={ () => {}}/>)
    const button = component.container.querySelectorAll('button');

    if (button[1] !== null) {
        fireEvent.click(button[1]);
    }
    expect(mockHandler).toHaveBeenCalledTimes(1)

})


test('click eliminar del carrito, pasando las 2 funciones de añadir y eliminar por parámetros',() =>{
    const producto = {
        _id: "0",
        name: "Nike amarilla",
        code: "123",
        size: "S",
        stock: 5,
        category: "Sudadera",
        color: "rojo",
        price: 3,
        imagen: "no hay",
        quantity: 2,
    }
    const productos: Product[] = [producto];
    const [cartOpen, setCartOpen] = useState(false);
    const[cartItems, setCartItems] = useState([] as Product[]);

    const getTotalItems = (items: Product[]) =>
        items.reduce((ack: number, item)=>ack+item.quantity,0);

    const handleAddToCart = (clickedItem: Product) => {
        setCartItems(prev => {
            const isItemInCart = prev.find(item => item._id === clickedItem._id)
            if (isItemInCart) {
                return prev.map(item => (
                    item._id === clickedItem._id ? {...item, quantity: item.quantity+1} : item
                ))
            }
            // Si no hay el producto en el carrito se añade nuevo
            return [...prev, {...clickedItem, quantity:1}];
        })
    };

    const handleRemoveFromCart = (name: string) => {
        setCartItems(prev=>(
            prev.reduce((ack, item)=> {
                if(item.name===name ){
                    if(item.quantity===1)return ack;
                    return [...ack, {...item, cantidad:item.quantity - 1}]
                } else {
                    return [...ack, item];
                }
            },[] as Product[])
        ))

    };

    const mockHandler = jest.fn();

    const component = render(<Cart cartItems={productos} addToCart={handleAddToCart} removeFromCart={handleRemoveFromCart}/>)
    const button = component.container.querySelectorAll('button');

    if (button[1] !== null) {
        fireEvent.click(button[1]);
    }
    expect(mockHandler).toHaveBeenCalledTimes(1)

})
