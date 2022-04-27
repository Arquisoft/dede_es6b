import { PinDropSharp } from '@mui/icons-material';
import { AppBar, Button } from '@mui/material';
import React, { Component, useEffect } from 'react'
import {NavLink}  from 'react-router-dom'
import { getProductsByCategory } from '../../api/api';


export type Props = {
    function: (s:string) => void;
    categorys: string[];
  };

const NavHome = (props: Props) => {
    
    return(
        <div>
            {props.categorys.map(c=>{
                <div>Hola</div>
            })
            }
            <Button onClick={()=>refreshProducts("Sudaderas",props)}>
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
    )

} ;

function refreshProducts(category:string, props:Props){
    props.function(category);
}



export default NavHome;

