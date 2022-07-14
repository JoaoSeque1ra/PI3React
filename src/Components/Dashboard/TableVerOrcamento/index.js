import React, { useState } from 'react';
import DataTable, { createTheme } from 'react-data-table-component';

export default function TablesVerOrcamento({campo1, campo2, campo3, campo4, campo5 }) {
    const columns = [
        {
            name: campo1,
            selector: row => row.campo1,
            style: {
                fontSize: '1rem',
            },
        },
        {
            name: campo2,
            selector: row => row.campo2,
            hide: 'sm',
            style: {
                fontSize: '1rem',
            },
        },
        {
            name: campo3,
            selector: row => row.campo3,
            sortable: true,
            center: true,
            style: {
                fontSize: '1rem',
            },
        },
        {
            name: campo4,
            selector: row => row.campo4,
            right: true,
            style: {
                fontSize: '1rem',
            },
        },
        {
            name: campo5,
            selector: row => row.campo5,
            right: true,
            style: {
                fontSize: '1rem',
            },
        }
    ];

    const data = [
        {
            id: 1, //Não sou obrigado a meter
            campo1: 'Design Logotipo',
            campo2: '57,75€',
            campo3: '12',
            campo4: '57,75€',
            campo5: '17,25€',
        },
        {
            id: 2, //Não sou obrigado a meter
            campo1: 'Paleta de Cores',
            campo2: '20,25€',
            campo3: '1',
            campo4: '20,25€',
            campo5: '10€',
        },
    ]

    createTheme('teste', {
        background: {
            default: '#0000000'
        }
    })

    const [infoOrcamento, setInfoOrcamento] = useState(data);
    
    return (  
        <DataTable columns={columns} data={infoOrcamento} theme="teste" />
    );    
}