import { Box, Card, CardActionArea, CardMedia, Grid } from "@mui/material";
import { ContactWrapper } from "../components/navegacion/ContactOption.styles";
import NavFilter, { Props } from "../components/navegacion/NavFilter"
import promotionSeason from "../utils/img/promocion-temporada.jpeg"
import { makeStyles } from '@material-ui/core/styles';



export const PromotionsPage = (props:Props)=> {
    return (
    <div>
        <NavFilter function={props.function} categorys={props.categorys}></NavFilter>

        <div><img src={promotionSeason} alt={"primavera-verano"}/></div>

    </div>
        
      );
}