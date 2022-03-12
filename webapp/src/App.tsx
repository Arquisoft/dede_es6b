import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';
import EmailForm from './components/EmailForm';
import UserList from './components/UserList';
import  {getUsers} from './api/api';
import {User} from './shared/shareddtypes';
import './App.css';
import Login from './paginas/Login';
import Register from './paginas/Register';
import NavBar from './components/navegacion/NavBar';


function App(): JSX.Element {

  const [users,setUsers] = useState<User[]>([]);

  const refreshUserList = async () => {
    setUsers(await getUsers());
  }

  useEffect(()=>{
    refreshUserList();
  },[]);

  return (
    <>
    <NavBar/>
      <Container maxWidth="sm">
      <Login/>
      </Container>
    </>
    
  );
}

export default App;
