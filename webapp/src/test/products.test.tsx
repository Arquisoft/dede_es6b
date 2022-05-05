import { fireEvent, render, screen } from '@testing-library/react';
import Cart from '../components/cart/Cart';
import CardProduct from '../components/products/CardProduct';
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
        },
        {
            _id: "Prueba3",
            name: "nombre_Prueba3",
            code: "Prueba3",
            size: "S",
            stock: 12,
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
            category: "Camisetas",
            color: "Azul",
            price: 7.95,
            imagen: "",
            quantity: 1
        }
    ]

    const mockHandler = jest.fn()
    const components = render(
        <Products products={products} addToCart={mockHandler } categorys={[]} function={function (s: string): void {
            throw new Error('Function not implemented.');
        } }></Products>
    );

    const cardProductButtons = components.getAllByPlaceholderText("addToCart")
    fireEvent.click(cardProductButtons[0])

    expect(mockHandler).toHaveBeenCalledTimes(1)


    expect(components.container).toHaveTextContent('nombre_Prueba1');
    expect(components.container).toHaveTextContent('nombre_Prueba2');
    expect(components.container).toHaveTextContent('nombre_Prueba3');
    expect(components.container).toHaveTextContent('nombre_Prueba4');

    expect(components.container).toHaveTextContent('22€');
    expect(components.container).toHaveTextContent('20€');
    expect(components.container).toHaveTextContent('15€');
    expect(components.container).toHaveTextContent('7.95€');

    expect(components.container).toHaveTextContent('Añadir al carrito');
    expect(components.container).toHaveTextContent('Añadir al carrito');

});

test("A product is rendered", async () => {

    const product: Product =
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
    }

    const components = render(
        <CardProduct product={product} addToCart={() => { }}></CardProduct>
    );

    expect(components.container).toHaveTextContent('nombre_Prueba1');
    expect(components.container).toHaveTextContent('22€');
    expect(components.container).toHaveTextContent('Añadir al carrito');
});