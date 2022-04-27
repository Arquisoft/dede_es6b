import { PinDropSharp } from '@mui/icons-material';
import { AppBar, Button } from '@mui/material';
import React, { Component, useEffect } from 'react'
import {NavLink}  from 'react-router-dom'
import { getProductsByCategory } from '../../api/api';
import { Nav} from './NavHome.styles';


export type Props = {
    function: (s:string) => void;
    categorys: string[];
  };

const NavHome = (props: Props) => {
    
    return(
        <Nav>
            {props.categorys.map(c=>{
                <div>Hola</div>
            })
            }
            <div className="buttons">
            <Button  onClick={()=>refreshProducts("Sudaderas",props)}>
                Sudaderas
            </Button>
            <Button onClick={()=>refreshProducts("Pantalones",props)}>
                Pantalones
            </Button>
            <Button onClick={()=>refreshProducts("Camisetas",props)}>
                Camisetas
            </Button>
            <Button onClick={()=>refreshProducts("Playeros",props)}>
                Calzado
            </Button>
            <Button onClick={()=>refreshProducts("Sudaderas",props)}>
                Accesorios
            </Button>
            </div>
        </Nav>
       
    )

} ;

function refreshProducts(category:string, props:Props){
    props.function(category);
}



export default NavHome;

