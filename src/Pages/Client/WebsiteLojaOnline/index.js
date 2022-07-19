import React,{useEffect} from 'react';

import Navbar from '../../../Components/NavbarClient';
import Main from './main';

export function WebsiteLojaOnline() {
    useEffect(()=>{
        document.title='Website e Loja Online'
    })

    return (  
        <>
            <Navbar />
            <Main />
        </>
    );
}