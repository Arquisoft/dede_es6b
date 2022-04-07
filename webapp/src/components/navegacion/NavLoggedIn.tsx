import { useSession, CombinedDataProvider, Text, LogoutButton } from "@inrupt/solid-ui-react";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { FOAF } from "@inrupt/lit-generated-vocab-common";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { makeStyles } from '@material-ui/core/styles';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Avatar from '@mui/material/Avatar';
import { Button, Divider, ListItemIcon } from "@mui/material";
import { Logout } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import Drawer from '@material-ui/core/Drawer';
import { Props } from "../cart/Cart";
import { CartItemsFunc } from "./NavBar";
import { setLogguedStatus } from "../../redux/userSlice";
import { useDispatch } from "react-redux";
import { profile } from "console";

const useStyles = makeStyles({
    appBar: {
      background:  'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      color: '#fff'
    }
  });

export default function NavLoggedIn(props:CartItemsFunc){
    const classes = useStyles();
    const navigate = useNavigate();
    const dispatch= useDispatch();

    function goToCart(){
      navigate('/cart');
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
        <PositionedMenu/>

        
    </Toolbar>
    </AppBar>
    </Box>
);
}

function PositionedMenu() {
    const { session } = useSession();
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    
    const profileDocumentURI = session.info.webId!;

    const navigate = useNavigate();

    function goHome(){
       navigate('/');
    }

    function goToProfile(){
      window.open(profileDocumentURI);
    }

    function goToMyOrders(){
      navigate('/orders/list');
   }

  
    return (
      <div>
        <IconButton
          id="demo-positioned-button"
          aria-controls={open ? 'demo-positioned-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
            <AccountCircleIcon/>
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5,
              '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              '&:before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: 'right', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >

        <MenuItem>
            {/*
        // @ts-ignore */}
        <CombinedDataProvider datasetUrl={session.info.webId} thingUrl={session.info.webId}>
          <Button onClick={goToProfile}>
            <Text color="black" property={FOAF.name.iri.value} autosave />
            </Button>
        </CombinedDataProvider>
        </MenuItem>
          <MenuItem onClick={goToMyOrders}>Mis pedidos</MenuItem>
          <Divider />
          <MenuItem onClick={handleClose}>
          <LogoutButton>
              <Button onClick={goHome}><Logout></Logout>Log Out</Button>
          </LogoutButton>
              </MenuItem>
        </Menu>
      </div>
    );
  }