import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';

import ButtonTabelas from '../TableOrcamentos/ButtonTabelas';

export default function TablesClientes({campo1, campo2, campo3, campo4, campo5, campo6, nomeTabela}) {
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
            wrap: true,
            hide: 'md',
            style: {
                fontSize: '1rem'
            },
        },
        {
            name: campo3,
            selector: row => row.campo3,
            sortable: true,
            hide: 'md',
            right: true,
            style: {
                fontSize: '1rem'
            },
        },
        {
            name: campo4,
            selector: row => row.campo4,
            sortable: true,
            right: true,
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
            wrap: true,
            button: true,
            cell: (row) => <ButtonTabelas id={row.campo1}/>
        },
    ];

    const [infoOrcamento, setInfoOrcamento] = useState([]);

    useEffect(()=>{
        setInfoOrcamento([
            {
                id: 1, //Não sou obrigado a meter
                campo1: 'João Sequeira',
                campo2: 'joaoSequeira28@hotmail.com',
                campo3: '91093857',
                campo4: '2',
                campo5: '500€',
            }
        ])
    },[])


    const paginationOptions = {
        rowsPerPageText: 'Filas por página',
        rangeSeparatorText: 'de',

    };

    
    return (  
        <DataTable columns={columns} data={infoOrcamento} pagination paginationComponentOptions={paginationOptions} />
    );    
}