import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Cart from '../components/cart/Cart';
import NavBar from '../components/navegacion/NavBar';
import NavLoggedIn from '../components/navegacion/NavLoggedIn';
import NavLoggedOut from '../components/navegacion/NavLoggedOut';
import CardProduct from '../components/products/CardProduct';
import Products from '../components/products/Products';
import { HomePage } from '../pages/HomePage';
import { Product } from '../shared/shareddtypes';


test('filtermenu is rendered', () => {
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
        imagen: "",
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
        imagen: "",
        quantity: 1
        }
    ]


    const component = render(<HomePage products={products} addToCart={()=>{}} categorys={[]} function={function (s: string): void {
        throw new Error('Function not implemented.');
    } }/>)


    expect(component.getByText('nombre_Prueba1'))
    expect(component.getByText('22€'))

    expect(component.getByText('nombre_Prueba2'))
    expect(component.getByText('20€'))

    

    expect(component.container).toHaveTextContent('Sudaderas')
    expect(component.container).toHaveTextContent('Pantalones')
    expect(component.container).toHaveTextContent('Camisetas')
    expect(component.container).toHaveTextContent('Calzado')
    expect(component.container).toHaveTextContent('Accesorios')
  });

  test('navbar logout is rendered', () => {
    const component = render(<BrowserRouter><NavLoggedOut getItems={0} function={function (): void {
        throw new Error('Function not implemented.');
    } }></NavLoggedOut></BrowserRouter>)
    expect(component.getByText("Iniciar sesión"));
    expect(component.getByText("DeDe"));
    expect(component.getByText("Atención al cliente"));
    expect(component.getByText("Contáctanos"));
    expect(component.getByText("Promociones"));
  });

  test('navbar loging is rendered', () => {
    const component = render(<BrowserRouter><NavLoggedIn getItems={0} function={function (): void {
        throw new Error('Function not implemented.');
    } }></NavLoggedIn></BrowserRouter>)

    expect(component.getByText("DeDe"));
    expect(component.getByText("Atención al cliente"));
    expect(component.getByText("Contáctanos"));
    expect(component.getByText("Promociones"));
    expect(component.getByPlaceholderText("shoppingCartButton"));

    
  });

  test('click button Iniciar sesión', () => {
    const component = render(<BrowserRouter><NavLoggedOut getItems={0} function={function (): void {
        throw new Error('Function not implemented.');
    } }></NavLoggedOut></BrowserRouter>)

    const mockHandler = jest.fn()
    
    const button= component.getByText("Iniciar sesión");
    fireEvent.click(button)
  });


  