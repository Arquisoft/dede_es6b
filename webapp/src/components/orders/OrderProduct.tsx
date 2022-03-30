import { Product } from "../../shared/shareddtypes";

export {};

type Order={
    product: Product;
}

const OrderProductItem: React.FC<Order> = ({product}) => {

    return (
        <div>
            <h2>{product.name}</h2>
            <div className="information">
              <p>{product.price}€ x {product.quantity}</p>
            </div>
            <div>
                <img src={product.imagen}/>
            </div>
        </div>
    );
}

export default OrderProductItem;