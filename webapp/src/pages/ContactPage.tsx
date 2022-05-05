
import { ContactWrapper } from "../components/navegacion/ContactOption.styles";
import NavFilter, { Props } from "../components/navegacion/NavFilter"

export const ContactPage = (props:Props)=> {
    return (
        
        <div>
        <NavFilter function={props.function} categorys={props.categorys}></NavFilter>
        <ContactWrapper>
            <div>
          <p>DeDe / Atención al cliente / Contáctanos</p>
          <h3>CONTACTA CON NOSOTROS </h3>
            <h4>EMAIL</h4>
            <p>Podemos responder a tus preguntas a través de contactDede@gmail.com </p>
            <h4>TELÉFONO</h4>
            <p>800 000 333 </p>
            <h4>REDES SOCIALES</h4>
            <p>Twitter: dedeASW6b </p>
            <p>Instagram: dedeASW6b </p>
            </div>
            </ContactWrapper>
        </div>
        
      );
}