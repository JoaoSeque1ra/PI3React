import React, {useEffect} from 'react';

import Navbar from '../../../Components/NavbarClient';
import Main from './main';

export function DesignGrafico() {
    useEffect(()=>{
        document.title='Design Grafico'
    })

    return (  
        <>
            <Navbar />
            <Main />
        </>
    );
}