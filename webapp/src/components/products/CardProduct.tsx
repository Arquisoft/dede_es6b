import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { AddShoppingCart } from '@mui/icons-material';
import { ProductAdd } from '../../pages/HomePage';
import { Button } from '@mui/material';
import { Product } from '../../shared/shareddtypes';
import { useNavigate } from "react-router-dom";
import DetallesProducto from './DetallesProducto';

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

type ProductToAdd = {
  product: Product
  addToCart: (clickedItem: Product) => void;
}


export default function CardProduct(product: ProductToAdd) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const navigate = useNavigate();

  const viewDetails = () => {
    navigate('/products/' + product.product._id)
  };
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardMedia
        component="img"
        height="300"
        image={product.product.imagen}
        alt={product.product.name}
        onClick={viewDetails()}
      />
      <CardContent >
        <Typography variant="body1" color="text.primary">
         {product.product.name}
        </Typography>
        <Typography variant="body1" color="text.primary">
         {product.product.price}€
        </Typography>
      </CardContent>
      <CardActions >
        <IconButton disabled= {product.product.stock > 0 ? false : true}
        onClick={() => product.addToCart(product.product)} aria-label="add to cart"  >
          <AddShoppingCart fontSize='large' />
        </IconButton>
      </CardActions>
      
    </Card>
  );
}
