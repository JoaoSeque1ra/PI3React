import React, { useState } from 'react';
import DataTable from 'react-data-table-component';

import EstadoTabelas from './EstadoTabelas';
import ButtonTeste from './ButtonTabelas';

export default function Tables({campo1, campo2, campo3, campo4, campo5, campo6}) {
    const columns = [
        {
            name: campo1,
            selector: row => row.campo1,
            sortable: true,
            style: {
                fontSize: '1rem'
            },
        },
        {
            name: campo2,
            selector: row => row.campo2,
            sortable: true,
            style: {
                fontSize: '1rem'
            },
        },
        {
            name: campo3,
            selector: row => row.campo3,
            sortable: true,
            hide: 'md',
            style: {
                fontSize: '1rem'
            },
        },
        {
            name: campo4,
            selector: row => row.campo4,
            sortable: true,
            center: true,
            hide: 'md',
            cell: row => (
                <EstadoTabelas estado={row.campo4}/>
            ),
            style: {
                fontSize: '1rem'
            },
        },
        {
            name: campo5,
            selector: row => row.campo5,
            sortable: true,
            right: true,
            style: {
                fontSize: '1rem'
            },
        },
        {
            name: campo6,
            selector: row => row.campo6,
            button: true,
            cell: (row) => <ButtonTeste id={row.campo1}/>
        },
    ];

    const data = [
        {
            id: 1, //Não sou obrigado a meter
            campo1: '88',
            campo2:  'João Sequeira',
            campo3: '12-07-2022',
            campo4: 'Novo',
            campo5: '500€',
        }
    ]

    const paginationOptions = {
        rowsPerPageText: 'Filas por página',
        rangeSeparatorText: 'de',

    };

    const [infoOrcamento, setInfoOrcamento] = useState(data);
    
    return (  
        <DataTable columns={columns} data={infoOrcamento} pagination paginationComponentOptions={paginationOptions} />
    );    
}