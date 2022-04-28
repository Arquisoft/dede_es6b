import { Button, Card , CardActionArea, CardActions, CardMedia, Dialog, IconButton} from "@mui/material";
import { render } from "react-dom";
import { Modal } from "reactstrap";
import { PaymentType } from "../../../shared/shareddtypes";
import ButtonAppBar from "../../navegacion/NavBar";


type Payment = {
    paymentType: PaymentType
}

const PaymentItem: React.FC<Payment> = ({paymentType}) => {

    return (
        
        <Card sx={{ maxWidth: 150, height:100}}>
            <CardActionArea>
                    <CardMedia
                        component="img"
                        height="100"
                        width="150"
                        image={paymentType.img}
                        alt={paymentType.name}
                    />
            </CardActionArea>
        </Card>

        
    );
}



export default PaymentItem;