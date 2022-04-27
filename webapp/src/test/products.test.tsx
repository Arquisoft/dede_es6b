import { render, screen } from '@testing-library/react';
import Cart from '../components/cart/Cart';
import Products from '../components/products/Products';
import { Product } from '../shared/shareddtypes';


test("A list of products is rendered", async () => {
    const products: Product[] = [
        {
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
        },
        {
            _id: "Prueba2",
        name: "Prueba2",
        code: "Prueba2",
        size: "S",
        stock: 12,
        // category:{type: string, enum:['Camisetas', 'Sudaderas', 'Pantalones']},
        category: "Camisetas",
        color: "Azul",
        price: 22,
        imagen: "",
        quantity: 1
        },
        {
            _id: "Prueba3",
            name: "Prueba3",
            code: "Prueba3",
            size: "S",
            stock: 12,
            // category:{type: string, enum:['Camisetas', 'Sudaderas', 'Pantalones']},
            category: "Camisetas",
            color: "Azul",
            price: 22,
            imagen: "",
            quantity: 1
        },
        {
            _id: "Prueba4",
            name: "Prueba4",
            code: "Prueba4",
            size: "S",
            stock: 12,
            // category:{type: string, enum:['Camisetas', 'Sudaderas', 'Pantalones']},
            category: "Camisetas",
            color: "Azul",
            price: 22,
            imagen: "",
            quantity: 1
        }
    ]

    const components = render(
        <Products products={products} addToCart={() => { } } categorys={[]} function={function (s: string): void {
            throw new Error('Function not implemented.');
        } }></Products>
    );

    expect(components.container).toHaveTextContent('Prueba');
    expect(components.container).toHaveTextContent('Prueba2');
    expect(components.container).toHaveTextContent('Prueba3');
    expect(components.container).toHaveTextContent('Prueba4');

    /*expect(components.container).toHaveTextContent('Pelota');
    expect(components.container).toHaveTextContent('Para jugar');
    expect(components.container).toHaveTextContent('2');

    expect(components.container).toHaveTextContent('Pala de pádel');
    expect(components.container).toHaveTextContent('Para jugar al pádel');
    expect(components.container).toHaveTextContent('265');

    expect(components.container).toHaveTextContent('Pantalón');
    expect(components.container).toHaveTextContent('Para vestirse');
    expect(components.container).toHaveTextContent('45');

    expect(components.container).toHaveTextContent('Balón');
    expect(components.container).toHaveTextContent('Para jugar al fútbol');
    expect(components.container).toHaveTextContent('25');

    expect(components.container).toHaveTextContent('Guantes');
    expect(components.container).toHaveTextContent('Para parar golitos');
    expect(components.container).toHaveTextContent('34');*/
});