import { render, screen } from '@testing-library/react';
import Cart from '../components/cart/Cart';
import { Product } from '../shared/shareddtypes';
test('cart is rendered', ()=> {
    const product = {
        _id: "Prueba",
        name: "Prueba",
        code: "Prueba",
        size: "S",
        stock: 12,
        // category:{type: string, enum:['Camisetas', 'Sudaderas', 'Pantalones']},
        category: "Camisetas",
        color: "Azul",
        price: 22,
        imagen: "",
        quantity: 1
    }
  const productos:Product[] = [product];
  const component = render(<Cart cartItems={productos} addToCart={() => {}} removeFromCart={() => {}}/>)
  
  //Para mostrar el contenido del componente
  
  
  /* Para mostrar un componente de manera legible por cosola
  const li = component.container.querySelector('li');
  console.log(prettyDOM(li));
  */
  
  //Son dos maneras de hacerlo
  //component.getByText(juguete.nombre);
  //component.getByText(juguete.descripcion);
  expect(component.container).toHaveTextContent(product.name);
  //expect(component.container).toHaveTextContent(juguete.descripcion);
  
  })