
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
    const [buttonClicked, setButtonClicked] = useState(false);

    const handleButtonClick = () => {
        setButtonClicked(true)
    }

    return (
        <div>
        <Card sx={{ maxWidth: 150, height:100}}>
            <CardActionArea onClick={handleButtonClick}>
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
            {buttonClicked ? (<CreditCardForm></CreditCardForm>): null}
        </div>
        </div>
    );
}

function CCForm (name:string) {
    if(openCC==false && name==="Credit Card"){
        openCC=true;
        return (
            <Grid container direction="column">
            <FormGroup>
                <label>Número de tarjeta</label>
                <input type="text" value="Ej:5540 2345 1234 4456"></input>
            </FormGroup>
            <FormGroup>
                <label>Código de seguridad</label>
                <input type="text" value="Ej:448"></input>
            </FormGroup>
            <FormGroup>
                <label>Nombre del titular</label>
                <input type="text" value="María Álvarez Pérez"></input>
            </FormGroup>
            <FormGroup>
                <label>Fecha de caducidad</label>
                <input type="text" value="05/2023"></input>
            </FormGroup>
            </Grid>
        );
    }
    
}


export default PaymentItem;