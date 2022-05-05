import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import CardPromo from '../components/navegacion/CardPromo';
import NavFilter from '../components/navegacion/NavFilter';
import NavLoggedIn from '../components/navegacion/NavLoggedIn';
import NavLoggedOut from '../components/navegacion/NavLoggedOut';
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
    } } emptyCart={function (): void {
      throw new Error('Function not implemented.');
    } }></NavLoggedOut></BrowserRouter>)
    expect(component.getByText("Iniciar sesión"));
    expect(component.getByText("Contáctanos"));
    expect(component.getByText("Promociones"));
  });

  test('navbar loging is rendered', () => {
    const component = render(<BrowserRouter><NavLoggedIn getItems={0} function={function (): void {
      throw new Error('Function not implemented.');
    } } emptyCart={function (): void {
      throw new Error('Function not implemented.');
    } }></NavLoggedIn></BrowserRouter>)

    expect(component.getByText("Contáctanos"));
    expect(component.getByText("Promociones"));
    expect(component.getByPlaceholderText("shoppingCartButton"));

    
  });

  test('click button Iniciar sesión', () => {
    const component = render(<BrowserRouter><NavLoggedOut getItems={0} function={function (): void {
      throw new Error('Function not implemented.');
    } } emptyCart={function (): void {
      throw new Error('Function not implemented.');
    } }></NavLoggedOut></BrowserRouter>)

    const mockHandler = jest.fn()
    
    const button= component.getByText("Iniciar sesión");
    fireEvent.click(button)
  });

  test('navfilter is render', () => {
    const mockfilter= jest.fn();
    const categorys= ["Sudaderas", "Pantalones", "Camisetas", "Calzado", "Accesorios"]

    const component = render(<BrowserRouter><NavFilter function={mockfilter} categorys={categorys}></NavFilter></BrowserRouter>)
    
    expect(component.container).toHaveTextContent('Sudaderas')
    expect(component.container).toHaveTextContent('Pantalones')
    expect(component.container).toHaveTextContent('Camisetas')
    expect(component.container).toHaveTextContent('Calzado')
    expect(component.container).toHaveTextContent('Accesorios')

    const buttonSudaderas= component.getByText("Sudaderas")
    fireEvent.click(buttonSudaderas)

    expect(mockfilter).toHaveBeenCalledTimes(1)

    const buttonPants= component.getByText("Pantalones")
    fireEvent.click(buttonPants)

    expect(mockfilter).toHaveBeenCalledTimes(2)

    const buttonCamis= component.getByText("Camisetas")
    fireEvent.click(buttonCamis)

    expect(mockfilter).toHaveBeenCalledTimes(3)

    const buttonCalzado= component.getByText("Calzado")
    fireEvent.click(buttonCalzado)

    expect(mockfilter).toHaveBeenCalledTimes(4)

    const buttonAcces= component.getByText("Accesorios")
    fireEvent.click(buttonAcces)

    expect(mockfilter).toHaveBeenCalledTimes(5)

  });


  test('CardPromo is rendered', () => {
      let mockPromo={
          img:"imagen1",
          title:"prueba1",
          description:"descripción"
      }

    const component = render(<CardPromo img={mockPromo.img} title={mockPromo.title} description={mockPromo.description}></CardPromo>)
    
    expect(component.container).toHaveTextContent("prueba1")
    expect(component.container).toHaveTextContent("descripción")
    expect(component.getByAltText("prueba1"))
  });