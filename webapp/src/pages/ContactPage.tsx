import { Grid } from "@mui/material";
import NavFilter, { Props } from "../components/navegacion/NavFilter"

export const ContactPage = (props:Props)=> {
    return (
        <div className="ContactPage">
          <NavFilter function={props.function} categorys={props.categorys}></NavFilter>
          <p>DeDe / Atención al cliente / Contáctanos</p>
          <p>CONTACTA CON NOSOTROS</p>
          <Grid container direction="column">
            <h4>EMAIL</h4>
            <p>Podemos responder a tus preguntas a través de contactDede@gmail.com </p>
            <h4>TELÉFONO</h4>
            <p>Horario: </p>
            <p>800 000 333 </p>
            <h4>REDES SOCIALES</h4>
            <p>Twitter: dedeASW6b </p>
            <p>Instagram: dedeASW6b </p>
          </Grid>   
        </div>
        
      );
}