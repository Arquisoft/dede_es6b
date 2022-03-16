
import './App.css';
import { BrowserRouter, Route, Routes, useNavigate} from "react-router-dom";
import { HomePage } from './pages/HomePage';
import { LoginPage } from './pages/LoginPage';
import {
  handleIncomingRedirect,
  onSessionRestore
} from "@inrupt/solid-client-authn-browser"
import { useDispatch } from 'react-redux';
import { setLogguedStatus } from './redux/userSlice';
import { useEffect } from 'react';
import { createHashHistory } from "history";

function App(): JSX.Element {

  const dispatch = useDispatch();
  const history = createHashHistory();


  onSessionRestore((url) => {
    let uri = url.split("//")[1].split("/");
    history.push(uri[2])
});

useEffect(() => {
    document.title = "DeDe";
    handleIncomingRedirect({
        restorePreviousSession: true
    }).then(() => {
        dispatch(setLogguedStatus(true));
    });
}, [dispatch]);


  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/login" element={<LoginPage/>}/>  
    </Routes>    
    </BrowserRouter>
  );
}

export default App;

