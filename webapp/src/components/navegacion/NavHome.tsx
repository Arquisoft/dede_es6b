import { PinDropSharp } from '@mui/icons-material';
import { AppBar, Button } from '@mui/material';
import React, { Component, useEffect } from 'react'
import {NavLink}  from 'react-router-dom'
import { getProductsByCategory } from '../../api/api';


export type Props = {
    function: (s:string) => void;
  };

const NavHome = (props: Props) => {
    let categorys= ["Sudaderas", "Pantalones", "Camisetas", "Calzado", "Accesorios"]
    return(
        <div>
            {categorys.map(c=>{
                <Button>{c}</Button>
            })
            }
            <Button onClick={()=>refreshProducts("Sudaderas",props)}>
                Sudaderas
            </Button>
            <Button>
                Pantalones
            </Button>
            <Button>
                Camisetas
            </Button>
            <Button>
                Calzado
            </Button>
            <Button>
                Accesorios
            </Button>
        </div>
    )

} ;

function refreshProducts(category:string, props:Props){
    props.function(category);
}



export default NavHome;

