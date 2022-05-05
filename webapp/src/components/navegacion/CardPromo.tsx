import {  Card , CardActionArea, CardContent, CardMedia, Typography} from "@mui/material";

type PromoProps = {
    img: string,
    title: string,
    description:string
}


const CardPromo: React.FC<PromoProps> = ({img,title,description}) => {
    return (
        <div>
        <Card sx={{ maxWidth: 300, height:400, textAlign:'center'}}>
            <CardActionArea >
            <CardContent >
                    <Typography variant="body1" color="text.primary">
                     {title}
                    </Typography>
                    <Typography variant="body1" color="text.primary">
                     {description}
                    </Typography>
                  </CardContent>
                    <CardMedia
                        component="img"
                        height="400"
                        width="300"
                        image={img}
                        alt={title}
                    />
                    
 
            </CardActionArea>
        </Card>
        </div>
    );
}



export default CardPromo;