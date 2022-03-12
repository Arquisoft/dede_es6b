import React, { useState, useReducer, useEffect } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import { CardHeader } from '@mui/material';
import NavBar from '../components/navegacion/NavBar';



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
      background: 'white'
    }
  });


type State = {
  username: string
  password:  string
  confirmedPassword: string,
  isButtonDisabled: boolean
  helperText: string
  isError: boolean
};

const initialState:State = {
  username: '',
  password: '',
  confirmedPassword: '',
  isButtonDisabled: true,
  helperText: '',
  isError: false
};

type Action = { type: 'setUsername', payload: string }
  | { type: 'setPassword', payload: string }
  | { type: 'setConfirmedPassword', payload: string }
  | { type: 'setIsButtonDisabled', payload: boolean }
  | { type: 'registerSuccess', payload: string }
  | { type: 'registerFailed', payload: string }
  | { type: 'setIsError', payload: boolean };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'setUsername': 
      return {
        ...state,
        username: action.payload
      };
    case 'setPassword': 
      return {
        ...state,
        password: action.payload
      };
    case 'setConfirmedPassword': 
      return {
        ...state,
        confirmedPassword: action.payload
      };
    case 'setIsButtonDisabled': 
      return {
        ...state,
        isButtonDisabled: action.payload
      };
    case 'registerSuccess': 
      return {
        ...state,
        helperText: action.payload,
        isError: false
      };
    case 'registerFailed': 
      return {
        ...state,
        helperText: action.payload,
        isError: true
      };
    case 'setIsError': 
      return {
        ...state,
        isError: action.payload
      };
  }
}

const Login = () => {
  const classes = useStyles();
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
   if (state.username.trim() && state.password.trim() && state.confirmedPassword.trim()) {
    dispatch({
       type: 'setIsButtonDisabled',
       payload: false
     });
    } else {
      dispatch({
        type: 'setIsButtonDisabled',
        payload: true
      });
    }
  }, [state.username, state.password, state.confirmedPassword]);


  const handleRegister = () => {
    if (state.username.length < 5 ) {
      dispatch({
        type: 'registerFailed',
        payload: 'El nombre de usuario debe de tener una longitud mínima de 5 caracteres'
      });
    }
    else if (state.password.length < 8 ){
      dispatch({
        type: 'registerFailed',
        payload: 'La contraseña debe de tener una longitud mínima de 8 caracteres'
      });
    } 
    else if (state.password != state.confirmedPassword){
      dispatch({
        type: 'registerFailed',
        payload: 'Las contraseñas no coinciden'
      });
    }
    else {
      dispatch({
        type: 'registerSuccess',
        payload: 'Se ha registrado correctamente'
      });
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      state.isButtonDisabled || handleRegister();
    }
  };

  const handleUsernameChange: React.ChangeEventHandler<HTMLInputElement> =
    (event) => {
      dispatch({
        type: 'setUsername',
        payload: event.target.value
      });
    };

  const handlePasswordChange: React.ChangeEventHandler<HTMLInputElement> =
    (event) => {
      dispatch({
        type: 'setPassword',
        payload: event.target.value
      });
    }

  const handleConfirmedPasswordChange: React.ChangeEventHandler<HTMLInputElement> =
    (event) => {
      dispatch({
        type: 'setConfirmedPassword',
        payload: event.target.value
      });
    }

  return (
    <div>
      <NavBar/> 
    <form  noValidate autoComplete="off">
      <Card className={classes.card} variant="outlined">
        <CardHeader className={classes.header} title="Regístrese como nuevo usuario" />
        <CardContent className={classes.cardContent} >
          <div>
            <TextField
              error={state.isError}
              fullWidth
              id="username"
              type="email"
              label="Usuario"
              placeholder="Usuario"
              margin="normal"
              onChange={handleUsernameChange}
              onKeyPress={handleKeyPress}
            />
            <TextField
              error={state.isError}
              fullWidth
              id="password"
              type="password"
              label="Contraseña"
              placeholder="Contraseña"
              margin="normal"
              helperText={state.helperText}
              onChange={handlePasswordChange}
              onKeyPress={handleKeyPress}
            />
            <TextField
              error={state.isError}
              fullWidth
              id="confirmedPassword"
              type="password"
              label="Confirmar contraseña"
              placeholder="Confirmar contraseña"
              margin="normal"
              helperText={state.helperText}
              onChange={handleConfirmedPasswordChange}
              onKeyPress={handleKeyPress}
            />
          </div>
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            size="large"
            color="secondary"
            className={classes.loginBtn}
            onClick={handleRegister}
            disabled={state.isButtonDisabled}>
            Registrarse
          </Button>
        </CardActions>
      </Card>
    </form>
    </div>
  );
}

export default Login;