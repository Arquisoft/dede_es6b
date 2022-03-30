import { Product } from "../../shared/shareddtypes";
//import InfiniteScroll from 'react-infinite-scroll-component';
import OrderProductItem from "./OrderProduct";

export type PropsOrder = {
    orderProducts: Product[];
}

const OrderList:React.FC<PropsOrder> = ({orderProducts}) => {

    return (
        //Cuando se calcule con la api
        <div>
            <h3>Fecha de entrega</h3>
            <h2>{orderProducts.length} ITEMS</h2>
            {
                 orderProducts.map((p) => (
                    <OrderProductItem 
                        product={p}>
                    </OrderProductItem>))
            }
        </div>
        

    );
}

export default OrderList;