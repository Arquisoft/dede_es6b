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
            
            <h4>TELÉFONO</h4>
            <h4>REDES SOCIALES</h4>
          </Grid>   
        </div>
        
      );
}