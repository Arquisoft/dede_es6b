import { Box} from "@mui/material";
import NavFilter, { Props } from "../components/navegacion/NavFilter"
import promotionSeason from "../utils/img/promocion-temporada.jpeg"
import promo1 from "../utils/img/promo1.jpg"
import promo2 from "../utils/img/promo2.jpg"
import promo3 from "../utils/img/promo3.jpg"
import promo4 from "../utils/img/promo4.jpg"
import CardPromo from "../components/navegacion/CardPromo";



const data = [{img:promo1, title: "Vuelve el crochet", description: ""}, 
{img:promo2, title:"Vestidos para todo", description: ""},
{img:promo3, title:"Brilla con tu look", description: ""},
{img:promo4, title:"Team bermudas", description: ""}]

export const PromotionsPage = (props:Props)=> {
    return (
    <Box sx={{textAlign:'center'}}>
        <NavFilter function={props.function} categorys={props.categorys}></NavFilter>
        <p>DeDe / Promociones</p>
        <Box sx={{ display: 'flex' , justifyContent: 'center'}}><img src={promotionSeason} alt={"primavera-verano"}/></Box>
        <Box sx={{justifyContent: 'space-between',display: 'flex', marginRight:2, marginLeft:2, marginBottom:5 }}>
            {data.map(d => 
                <CardPromo img={d.img} title={d.title} description={d.description} ></CardPromo> 
        )}
        </Box>

    </Box>
        
      );
}