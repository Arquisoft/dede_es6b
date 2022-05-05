import store from "../redux/store";
import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { Login } from "@mui/icons-material";


test("login is rendered", async () => {
    const component = render( <BrowserRouter><Provider store={store}> <Login/></Provider></BrowserRouter> );
});

