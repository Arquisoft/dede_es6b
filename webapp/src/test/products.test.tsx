import { render, screen } from '@testing-library/react';
import Cart from '../components/cart/Cart';
import Products from '../components/products/Products';
import { Product } from '../shared/shareddtypes';


test("A list of products is rendered", async () => {
    
    const products: Product[] = [
        {
            _id: "Prueba",
        name: "nombre_Prueba1",
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
        name: "nombre_Prueba2",
        code: "Prueba2",
        size: "S",
        stock: 12,
        // category:{type: string, enum:['Camisetas', 'Sudaderas', 'Pantalones']},
        category: "Camisetas",
        color: "Azul",
        price: 20,
        imagen: "",
        quantity: 1
        },
        {
            _id: "Prueba3",
            name: "nombre_Prueba3",
            code: "Prueba3",
            size: "S",
            stock: 12,
            // category:{type: string, enum:['Camisetas', 'Sudaderas', 'Pantalones']},
            category: "Camisetas",
            color: "Azul",
            price: 15,
            imagen: "",
            quantity: 1
        },
        {
            _id: "Prueba4",
            name: "nombre_Prueba4",
            code: "Prueba4",
            size: "S",
            stock: 12,
            // category:{type: string, enum:['Camisetas', 'Sudaderas', 'Pantalones']},
            category: "Camisetas",
            color: "Azul",
            price: 7.95,
            imagen: "",
            quantity: 1
        }
    ]

    const components = render(
        <Products products={products} addToCart={() => { } } categorys={[]} function={function (s: string): void {
            throw new Error('Function not implemented.');
        } }></Products>
    );

    expect(components.container).toHaveTextContent('nombre_Prueba1');
    expect(components.container).toHaveTextContent('nombre_Prueba2');
    expect(components.container).toHaveTextContent('nombre_Prueba3');
    expect(components.container).toHaveTextContent('nombre_Prueba4');

    expect(components.container).toHaveTextContent('22€');
    expect(components.container).toHaveTextContent('20€');
    expect(components.container).toHaveTextContent('15€');
    expect(components.container).toHaveTextContent('7.95€');

});