import React, { useState, useReducer, useEffect, SyntheticEvent } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import { Autocomplete, CardHeader } from '@mui/material';
import { useDispatch } from "react-redux";
import { LoginButton, Text, useSession, CombinedDataProvider, LogoutButton } from "@inrupt/solid-ui-react";
import { setLogguedStatus } from '../redux/userSlice';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    width: 400,
    marginTop: '20px'
    
  },
  loginBtn: {
    marginTop: '20px',
    flexGrow: 1,
    color: 'white'
  },
  header: {
    textAlign: 'center',
    background:  'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    color: '#fff'
  },
  card: {
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    marginTop: '20px'
  },
  cardContent: {
    background: 'white',
  }
});

const authOptions = {
  clientName: "DeDe",
};

const providers = [
  { name: "SolidCommunity", value: "https://solidcommunity.net" },
];


export default function Login() {
  const { session } = useSession();
  const classes = useStyles();
  const [idp, setIdp] =useState("https://solidcommunity.net");
  const dispatch = useDispatch();
  
  function callback() {
    dispatch(setLogguedStatus(true));
}

return (
  
  
  <div className="app-container">
  <form  noValidate autoComplete="off">
  <Card className={classes.card} variant="outlined">
    <CardHeader className={classes.header} title="Identifícate" />
    <CardContent className={classes.cardContent} >
         
    <TextField
      id="idp"
      label="IDP"
      placeholder="Identity Provider"
      fullWidth
      margin="normal"
      defaultValue={idp}
      onChange={(e) => setIdp(e.target.value)}
    />
    <Autocomplete
         options={providers}
         getOptionLabel={(option) => option.name}
         fullWidth
         data-testid="provider"
         renderInput={(params) => <TextField {...params} label="Provider" variant="outlined" margin="normal" />}
         onChange={(event, o) =>setIdp(o!.value)}
                        />
    <LoginButton
      oidcIssuer={idp}
      redirectUrl={window.location.origin}
      onError={console.error}
      authOptions={authOptions}
    >
       <Button id="LogInButton" onClick={callback} className={classes.loginBtn} data-testid="button" variant="contained" fullWidth size="large" color="secondary">Log In</Button>
    </LoginButton>
    </CardContent>
  </Card>
</form>
</div>


  
);
    }