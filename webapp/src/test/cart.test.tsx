import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Cart from '../components/cart/Cart';
import CartProductItem from '../components/cart/CartProductItem';
import { Product } from '../shared/shareddtypes';


test('cart is rendered', () => {

    const component = render(<BrowserRouter><Cart cartItems={[]} addToCart={function (clickedItem: Product): void {
        throw new Error('Function not implemented.');
    } } removeFromCart={function (id: string): void {
        throw new Error('Function not implemented.');
    } }></Cart></BrowserRouter>)
    
    expect(component.container).toHaveTextContent("TU CARRITO")
    expect(component.container).toHaveTextContent("El carrito está vacío")
    expect(component.container).toHaveTextContent("Total:")
    expect(component.container).toHaveTextContent("Continuar compra")
    expect(component.container).toHaveTextContent("0.00€")
  });

  test('cart with products on it is rendered', () => {
    const products: Product[] = [
        {
            _id: "Prueba",
        name: "nombre_Prueba1",
        code: "Prueba",
        size: "S",
        stock: 12,
        category: "Camisetas",
        color: "Azul",
        price: 22,
        imagen: "imagen1",
        quantity: 1
        },
        {
            _id: "Prueba2",
        name: "nombre_Prueba2",
        code: "Prueba2",
        size: "S",
        stock: 12,
        category: "Camisetas",
        color: "Azul",
        price: 20,
        imagen: "imagen2",
        quantity: 1
        }
    ]


    const component = render(<BrowserRouter><Cart cartItems={products} addToCart={function (clickedItem: Product): void {
        throw new Error('Function not implemented.');
    } } removeFromCart={function (id: string): void {
        throw new Error('Function not implemented.');
    } }></Cart></BrowserRouter>)
    
    expect(component.container).toHaveTextContent("nombre_Prueba1")
    expect(component.container).toHaveTextContent("nombre_Prueba2")

    expect(component.container).toHaveTextContent("Precio: 22€")
    expect(component.container).toHaveTextContent("Precio: 20€")

    expect(component.container).toHaveTextContent("Total: 22.00€")
    expect(component.container).toHaveTextContent("Total: 20.00€")

    expect(component.container).toHaveTextContent("-")
    expect(component.container).toHaveTextContent("+")

    expect(component.container).toHaveTextContent("1")
    expect(component.container).toHaveTextContent("1")

    expect(component.getByAltText("imagen1"));
    expect(component.getByAltText("imagen2"));

    expect(component.container).toHaveTextContent("Continuar compra")

  });

  test('button add cart product', () => {
    const mockAdd = jest.fn()
    const component = render(<BrowserRouter><CartProductItem props={{
        _id: "Prueba",
        name: "nombre_Prueba1",
        code: "Prueba",
        size: "S",
        stock: 12,
        category: "Camisetas",
        color: "Azul",
        price: 22,
        imagen: "imagen",
        quantity: 1
    }} addCart={mockAdd} remove={function (id: string): void {
        throw new Error('Function not implemented.');
    } }></CartProductItem></BrowserRouter>)

    expect(component.container).toHaveTextContent("nombre_Prueba1")

    expect(component.container).toHaveTextContent("Precio: 22€")

    expect(component.container).toHaveTextContent("Total: 22.00€")

    expect(component.container).toHaveTextContent("1")
    expect(component.getByAltText("imagen"));
    
    const buttonAdd = component.getByText("+");
    fireEvent.click(buttonAdd)

    expect(mockAdd).toHaveBeenCalledTimes(1)
  })

  test('button delete cart product', () => {
    const mockDelete = jest.fn()
    const component = render(<BrowserRouter><CartProductItem props={{
        _id: "Prueba",
        name: "nombre_Prueba1",
        code: "Prueba",
        size: "S",
        stock: 12,
        category: "Camisetas",
        color: "Azul",
        price: 22,
        imagen: "imagen",
        quantity: 1
    }} addCart={()=>{}} remove={mockDelete }></CartProductItem></BrowserRouter>)

    expect(component.container).toHaveTextContent("nombre_Prueba1")

    expect(component.container).toHaveTextContent("Precio: 22€")

    expect(component.container).toHaveTextContent("Total: 22.00€")

    expect(component.container).toHaveTextContent("1")

    expect(component.getByAltText("imagen"));

    const buttonDelete= component.getByText("-");
    fireEvent.click(buttonDelete)

    expect(mockDelete).toHaveBeenCalledTimes(1)

  })