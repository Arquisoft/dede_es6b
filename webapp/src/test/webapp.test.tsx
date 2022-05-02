import '@testing-library/jest-dom/extend-expect';
import {fireEvent, render} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Product } from '../shared/shareddtypes';
import Cart from "../components/cart/Cart";

/*test('carrito renderizado', ()=> {
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

})*/