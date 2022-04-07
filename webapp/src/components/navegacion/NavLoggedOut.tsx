
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { makeStyles } from '@material-ui/core/styles';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import { useNavigate } from 'react-router-dom';
import { Button } from "@mui/material";
import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Props } from "../cart/Cart";
import { CartItemsFunc } from "./NavBar";


const useStyles = makeStyles({
    appBar: {
      background:  'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      color: '#fff'
    }
  });

export default function NavLoggedOut(props:CartItemsFunc){
  function goToCart(){
    navigate('/cart');
 }
 
    const navigate = useNavigate();
    const classes = useStyles();

    function goToLogIn(){
       navigate('/login');
    }

    function goHome(){
      navigate('/');
    }

    return(     
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Button onClick={goHome}>
          <Typography variant="h6" color="white" component="div" sx={{ flexGrow: 1 }}>
            DeDe
          </Typography>
          </Button>
          <Box sx={{ flexGrow: 1 }} />

          <Box sx={{ flexGrow: -3}}>
          <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
          onClick= {
            goToCart
          }>
          <Badge badgeContent={props.getItems} color="error">
             <ShoppingCartIcon/>
           </Badge>
          </IconButton>      
          <Button color="inherit" onClick={goToLogIn}>
            Iniciar sesión
          </Button>
          </Box>
    </Toolbar>
    </AppBar>
    </Box>
);
}
