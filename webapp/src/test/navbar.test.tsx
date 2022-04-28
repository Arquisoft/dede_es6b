import { render, screen } from '@testing-library/react';
import Cart from '../components/cart/Cart';
import NavBar from '../components/navegacion/NavBar';
import NavLoggedOut from '../components/navegacion/NavLoggedOut';
import CardProduct from '../components/products/CardProduct';
import Products from '../components/products/Products';
import { HomePage } from '../pages/HomePage';
import { Product } from '../shared/shareddtypes';

test('filtermenu is rendered', () => {
    const component = render(<HomePage products={[]} addToCart={function (clickedItem: Product): void {
        throw new Error('Function not implemented.');
    } } categorys={[]} function={function (s: string): void {
        throw new Error('Function not implemented.');
    } }/>)
    expect(component.container).toHaveTextContent('Sudaderas')
    expect(component.container).toHaveTextContent('Pantalones')
    expect(component.container).toHaveTextContent('Camisetas')
    expect(component.container).toHaveTextContent('Calzado')
    expect(component.container).toHaveTextContent('Accesorios')
  });

  

  