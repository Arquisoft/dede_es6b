import { Card , CardMedia} from "@mui/material";
import { PaymentType } from "../../../shared/shareddtypes";

type Payment = {
    paymentType: PaymentType
}

const PaymentItem: React.FC<Payment> = ({paymentType}) => {

    return (
        
        <Card sx={{ maxWidth: 150, height:100}}>
            <CardMedia
                component="img"
                height="100"
                width="150"
                image={paymentType.img}
                alt={paymentType.name}
            />
        </Card>

        
    );
}

export default PaymentItem;