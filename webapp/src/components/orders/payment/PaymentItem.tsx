
import { Button, Card , CardActionArea, CardActions, CardMedia, IconButton} from "@mui/material";
import { render } from "react-dom";
import { Box, FormGroup, Grid } from "@mui/material";
import { PaymentType } from "../../../shared/shareddtypes";
import ButtonAppBar from "../../navegacion/NavBar";
import { useState } from "react";
import CreditCardForm from "./CreditCardForm";


type Payment = {
    paymentType: PaymentType
}

var openCC=false;
var openPP=false;

const PaymentItem: React.FC<Payment> = ({paymentType}) => {
    const [buttonClickedCC, setButtonClickedCC] = useState(false);

    const handleButtonClickCC = () => {
        setButtonClickedCC(!buttonClickedCC)
    }

    const [buttonClickedPP, setButtonClickedPP] = useState(false);

    const handleButtonClickPP = () => {
        setButtonClickedPP(!buttonClickedPP)
    }


    return (
        <div>
        <Card sx={{ maxWidth: 150, height:100}}>
            <CardActionArea onClick={handleButtonClickCC}>
                    <CardMedia
                        component="img"
                        height="100"
                        width="150"
                        image={paymentType.img}
                        alt={paymentType.name}
                    />
                    
            </CardActionArea>
        </Card>
        <div>
            {buttonClickedCC ? (<CreditCardForm></CreditCardForm>): null}
        </div>
        </div>
    );
}



export default PaymentItem;