import React, { useState, useReducer, useEffect } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import type { AlertColor } from '@mui/material/Alert';
import {addUser} from '../api/api';

type User = {
    username: string
    password:  string
    isButtonDisabled: boolean
    helperText: string
    isError: boolean
  };
  
  const initialState:User = {
    username: '',
    password: '',
    isButtonDisabled: true,
    helperText: '',
    isError: false
  };
  
  type Action = { type: 'setUsername', payload: string }
  | { type: 'setPassword', payload: string }
  | { type: 'setIsButtonDisabled', payload: boolean }
  | { type: 'loginSuccess', payload: string }
  | { type: 'loginFailed', payload: string }
  | { type: 'setIsError', payload: boolean };
  
  const reducer = (state: User, action: Action): User => {
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
      case 'setIsButtonDisabled': 
        return {
          ...state,
          isButtonDisabled: action.payload
        };
        case 'loginSuccess': 
      return {
        ...state,
        helperText: action.payload,
        isError: false
      };
    case 'loginFailed': 
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
    //const classes = useStyles();
    const [state, dispatch] = useReducer(reducer, initialState);
  
    useEffect(() => {
      if (state.username.trim() && state.password.trim()) {
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
    }, [state.username, state.password]);

    const handleLogin = () => {
        if (state.username === 'abc@email.com' && state.password === 'password') {
          dispatch({
            type: 'loginSuccess',
            payload: 'Login Successfully'
          });
        } else {
          dispatch({
            type: 'loginFailed',
            payload: 'Incorrect username or password'
          });
        }
      };

      const handleKeyPress = (event: React.KeyboardEvent) => {
        if (event.keyCode === 13 || event.which === 13) {
          state.isButtonDisabled || handleLogin();
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

  return (
    <>
      <form name="login" onSubmit={handleLogin}>
        <TextField
            required
            name="username"
            label="Usuario" 
            variant="outlined"
            onChange={e => handleUsernameChange}
            onKeyPress={handleKeyPress}
            sx={{ my: 2 }}
          />
        <TextField
          required
          id="outlined-password-input"
          name="password"
          label="Contraseña" 
          variant="outlined"
          onChange={handlePasswordChange}
          onKeyPress={handleKeyPress}
          sx={{ my: 2 }}
        />
        <Button variant="contained" type="submit" sx={{ my: 2 }}>Iniciar sesión</Button>
      </form>
    </>
  );
}

export default Login;