import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { Product } from '../../shared/shareddtypes';

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', { 
    duration: theme.transitions.duration.shortest,
  }),
}));

type ProductToAdd ={
  product: Product
  addToCart:(clickedItem: Product)=>void;
}


export default function CardProduct(product:ProductToAdd) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 250} }>
      <CardMedia
        component="img"
        height="270"
        image={product.product.imagen}
        alt={product.product.name}
      />
      <CardContent sx={{height:25}}>
        <Typography variant="body1" color="text.primary">
         {product.product.name}
        </Typography>
        <Typography variant="body1" color="text.primary">
         {product.product.price}€
        </Typography>
      </CardContent>
      <CardActions sx={{justifyContent:"center"}}>
        {/* <IconButton placeholder="addToCart" disabled= {product.product.stock > 0 ? false : true}
        onClick={() => product.addToCart(product.product)} aria-label="add to cart"  >
          <AddShoppingCart fontSize='large' />
        </IconButton> */}
        <Button placeholder="addToCart" size="small" sx={{color:"white",backgroundColor :"#A6ACAF"}}
        style={{ textTransform: 'lowercase'}}
        disabled= {product.product.stock > 0 ? false : true}
        onClick={() => product.addToCart(product.product)} aria-label="add to cart">
          Añadir al carrito
        </Button>
      </CardActions>
      
    </Card>
  );
}
