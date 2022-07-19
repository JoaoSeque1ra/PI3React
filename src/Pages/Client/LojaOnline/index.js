import React, {useEffect} from 'react';

import Navbar from '../../../Components/NavbarClient';
import Main from './main';

export function LojaOnline() {
    useEffect(()=>{
        document.title='Loja Online'
    })

    return (  
        <>
            <Navbar />
            <Main />
        </>
    );
}