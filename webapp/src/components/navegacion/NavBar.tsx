import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Link from '@mui/material/Link';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  appBar: {
    background:  'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    color: '#fff'
  }
});

export default function ButtonAppBar() {
  const classes = useStyles();
  return (
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
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            DeDe
          </Typography>
         
          <Button color="inherit"
            onClick={() => {
              console.info("I'm a button.");
            }}>
            Iniciar sesión
          </Button>
          <Button color="inherit" >Registrarse</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
