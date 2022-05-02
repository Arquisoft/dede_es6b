
import {Product} from '../../shared/shareddtypes';

import Card from '../../../node_modules/react-bootstrap/Card'
import Button from '../../../node_modules/react-bootstrap/Button'
//import Carrito from './cart/Carrito';
import './catalogo.css';

type Producto = {
    props: Product;
    addToCarrito: (prod: Product) => void;
  }

//function Producto (props: Producto, addToCarrito: void): JSX.Element{
const DetallesProducto: React.FC<Producto> = ({props, addToCarrito}) => {

    const url = "./"+props.name+".jpg";
    let precio = "";
    if(props.price.toString().length == 4){
        precio = props.price + "0 €";
    } else {
        precio = props.price + " €";
    }    

    return (
        <>
        <Card id='producto' as="div">
            <Card.Img variant="top" src={url} id='img-top'/>
            <Card.Body>
                <Card.Title as="h2">{props.name}</Card.Title>
                <hr></hr>

            </Card.Body>
            
            <Card.Footer as="h2">
                {precio}
            </Card.Footer>
            <Button className="bt-Añadir" id='boton-añadir' onClick={() => addToCarrito(props)}>
                <svg xmlns="./cart.svg " width="16" height="16" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                </svg>
            </Button>
        </Card>
        </>
      
    );

}
export default Producto;
