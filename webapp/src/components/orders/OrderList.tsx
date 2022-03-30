import { Product } from "../../shared/shareddtypes";
import InfiniteScroll from 'react-infinite-scroll-component';
import OrderProductItem from "./OrderProduct";

type Props = {
    orderProducts: Product[];
}

const OrderList:React.FC<Props> = ({orderProducts}) => {

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