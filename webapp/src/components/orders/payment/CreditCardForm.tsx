import { FormGroup, Grid } from "@mui/material";

export default function CreditCardForm(){
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
