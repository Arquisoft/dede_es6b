import { Card, CardActionArea, CardMedia, Grid } from "@mui/material";
import { ContactWrapper } from "../components/navegacion/ContactOption.styles";
import NavFilter, { Props } from "../components/navegacion/NavFilter"
import promotionSeason from "../utils/img/promocion-temporada.jpeg"

export const PromotionsPage = (props:Props)=> {
    return (
    <div>
        <NavFilter function={props.function} categorys={props.categorys}></NavFilter>
       <div id="cards">
       <Card sx={{ maxWidth: 150, height:300}}>
            <CardActionArea >
                    <CardMedia
                        component="img"
                        height="100"
                        width="150"
                        image={promotionSeason}
                        alt={"Spring-Summer"}
                    />
                    
            </CardActionArea>
        </Card>
        </div> 
    </div>
        
      );
}