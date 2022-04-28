import { Card , CardMedia} from "@mui/material";
import { PaymentType } from "../../../shared/shareddtypes";

type Payment = {
    paymentType: PaymentType
}

const PaymentItem: React.FC<Payment> = ({paymentType}) => {

    return (
        <Card sx={{ maxWidth: 300}}>
            <CardMedia
                component="img"
                height="300"
                image={paymentType.img}
                alt={paymentType.name}
            />
        </Card>

        
    );
}

export default PaymentItem;