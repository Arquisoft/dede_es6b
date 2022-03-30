import { Product } from "../../shared/shareddtypes";

export {};

type Order={
    product: Product;
}

const OrderProductItem: React.FC<Order> = ({product}) => {

    return (
        <div>
            <div className="information">
              <h2>{product.name}</h2>
              <p>{product.price}€ x {product.quantity}</p>
            </div>
            <div className="imagen">
                <img src={product.imagen}/>
            </div>
        </div>
    );
}

export default OrderProductItem;