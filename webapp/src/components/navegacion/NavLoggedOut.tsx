
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
import { Button, Grid } from "@mui/material";

import { CartItemsFunc } from "./NavBar";

import logoDede from "../../utils/img/logo-reescalado-nofondo.jpg"

const useStyles = makeStyles({
    appBar: {
      background:  'linear-gradient(to bottom, #ccd0c7 60%, #A6ACAF)',
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
      refreshProducts();
      navigate('/');
    }

  function refreshProducts(){
      props.function();
  }

    return(     
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="static" className={classes.appBar} sx={{height:145}}>
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
          <div>
              <Button style={{ textTransform: 'lowercase'}} onClick={()=>navigate('/contactPage')}>
                  <Typography color="white" sx={{ fontSize: 'default' }}>
                      Contáctanos
                  </Typography>
              </Button>
              <Button style={{ textTransform: 'lowercase'}} onClick={()=>navigate('/promotions')}>
                  <Typography color="white" sx={{ fontSize: 'default' }}>
                      Promociones
                  </Typography>
              </Button>
          </div>
          
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
    <Grid container sx={{justifyContent:"center",position:"absolute", top:"3%" }} >
    <Grid item sx={{}}><Button onClick={goHome} sx={{backgroundColor:"transparent", height:110}}>
        {/* <Typography variant="h4" color="white" component="div" sx={{ flexGrow: 1 }}>
            DeDe
        </Typography> */}
        <img src={logoDede} alt="Logo DeDe" />
    </Button></Grid>
    </Grid>
    </AppBar>
    </Box>
);
}
