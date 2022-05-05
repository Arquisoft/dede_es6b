
import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Cart from '../components/cart/Cart';
import CartProductItem from '../components/cart/CartProductItem';
import { CartPage } from '../pages/CartPage';
import { ContactPage } from '../pages/ContactPage';
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';
import { PromotionsPage } from '../pages/PromotionsPage';
import { Product } from '../shared/shareddtypes';
import { Provider } from "react-redux";
import store from "../redux/store";
import Checkout from '../pages/Checkout';
import PaymentForm from '../components/checkout/PaymentForm';


test('promoPage is rendered', () => {

    const component = render(<PromotionsPage function={function (s: string): void {
        throw new Error('Function not implemented.');
    } } categorys={[]}></PromotionsPage>)
    
    expect(component.container).toHaveTextContent("DeDe / Promociones")
  });

  test('contactPage is rendered', () => {

    const component = render(<ContactPage function={function (s: string): void {
        throw new Error('Function not implemented.');
    } } categorys={[]}></ContactPage>)
    
    expect(component.container).toHaveTextContent("DeDe / Atención al cliente / Contáctanos")
    expect(component.container).toHaveTextContent("CONTACTA CON NOSOTROS")
    expect(component.container).toHaveTextContent("EMAIL")
    expect(component.container).toHaveTextContent("TELÉFONO")
    expect(component.container).toHaveTextContent("REDES SOCIALES")

  });

  test('cartPage is rendered', () => {

    const component = render(<BrowserRouter>
    <CartPage cartItems={[]} addToCart={function (clickedItem: Product): void {
        throw new Error('Function not implemented.');
    } } removeFromCart={function (id: string): void {
        throw new Error('Function not implemented.');
    } }></CartPage></BrowserRouter>)

  });

 test('loginPage is rendered', () => {
  const component = render( <BrowserRouter><Provider store={store}> <LoginPage/></Provider></BrowserRouter> );
});

   test('homePage is rendered', () => {

    const component = render(<BrowserRouter>
    <HomePage products={[]} addToCart={function (clickedItem: Product): void {
            throw new Error('Function not implemented.');
        } } categorys={[]} function={function (s: string): void {
            throw new Error('Function not implemented.');
        } } ></HomePage></BrowserRouter>)


  });

  test('checkout is rendered', () => {

    const component = render(<BrowserRouter>
    <Checkout emptyCart={function (): void {
        throw new Error('Function not implemented.');} } ></Checkout></BrowserRouter>)
    expect(component.container).toHaveTextContent("Checkout")
    expect(component.container).toHaveTextContent("Dirección de envío")
    expect(component.container).toHaveTextContent("Detalles de pago")
    expect(component.container).toHaveTextContent("Resumen de pedido")
    expect(component.container).toHaveTextContent("Selecciona tu dirección o crea una nueva en tu pod")

    expect(component.container).toHaveTextContent("Siguiente")

 
  });




