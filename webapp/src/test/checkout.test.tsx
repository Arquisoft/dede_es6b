import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import AddressForm from '../components/checkout/AddressForm';
import PaymentForm from '../components/checkout/PaymentForm';
import Review from '../components/checkout/Review';


test('addresform is rendered', () => {

    const component = render(<AddressForm></AddressForm>)
    
    expect(component.container).toHaveTextContent("Dirección de envío")
    expect(component.container).toHaveTextContent("Selecciona tu dirección o")
    expect(component.container).toHaveTextContent("crea una nueva en tu pod")
  });

  test('paymentForm is rendered', () => {

    const component = render(<PaymentForm></PaymentForm>)
    
    expect(component.container).toHaveTextContent("Método de pago")

   
    expect(component.getByLabelText("Fecha de caducidad"))
    expect(component.container.querySelector('#cardName'));
    expect(component.container.querySelector('#cardNumber'));
    expect(component.container.querySelector('#cvv'));

    expect(component.container).toHaveTextContent("Nombre del titular")
    expect(component.container).toHaveTextContent("Número de tarjeta")
    expect(component.container).toHaveTextContent("Fecha de caducidad")
    expect(component.container).toHaveTextContent("CVV")

  });

  test('review is rendered', () => {

    const component = render(<Review></Review>)
    
    expect(component.container).toHaveTextContent("Resumen de pedido")
    expect(component.container).toHaveTextContent("Envío")
  });