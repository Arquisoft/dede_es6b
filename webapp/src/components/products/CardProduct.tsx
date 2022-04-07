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
  addToCart:(clickedItem: Product)=>void;
}


export default function CardProduct(product:ProductToAdd) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 320 }}>
     <div style={{ height: 120 }}> 
      <CardHeader height="120"
        action={
            <Typography variant='h6' color='textSecondary'>
                {product.product.price}€
            </Typography>

          }
          title={<Typography variant='h6' color='black'>
          {product.product.name}
      </Typography>
          }
          subheader={product.product.stock > 0 ? "En Stock" : "Agotado"}
      />
      </div>
      <CardMedia
        component="img"
        height="194"
        image={product.product.imagen}
        alt={product.product.name}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
         {product.product.category}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton disabled= {product.product.stock > 0 ? false : true}
        onClick={() => product.addToCart(product.product)} aria-label="add to cart">
          <AddShoppingCart fontSize='large' />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>"Descripción"</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
