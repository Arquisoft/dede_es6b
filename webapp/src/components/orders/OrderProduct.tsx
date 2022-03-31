import { Product } from "../../shared/shareddtypes";
import { Wrapper } from "./OrderProduct.styles";

export {};

type Order={
    product: Product;
}

const OrderProductItem: React.FC<Order> = ({product}) => {

    return (
        <Wrapper>
            <div className="container">
            <div className="information">
              <h2>{product.name}</h2>
              <p>{product.price}€ x {product.quantity}</p>
            </div>
            <div className="imagen">
                <img src={product.imagen}/>
            </div>
        </div>
        </Wrapper>
        
    );
}

export default OrderProductItem;