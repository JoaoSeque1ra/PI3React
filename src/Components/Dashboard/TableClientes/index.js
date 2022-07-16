import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import axios from 'axios'

import ButtonTabelas from '../TableOrcamentos/ButtonTabelas';

export default function TablesClientes() {
    const [infoOrcamento, setInfoOrcamento] = useState([]);

    let somar = 0;
    useEffect(()=>{
        const urlBase = "http://localhost:3001/orcamento/listClients"
        axios.get(urlBase)
        .then(response => {
            if(response.data.success) {
                // console.log(response.data.data)
                return setInfoOrcamento(response.data.data)
            }

            alert(response.data.message)
        })
        .catch(err=> {
            alert("Erro: " + err)
        })
    },[])

    const columns = [
        {
            name: "Nome",
            selector: row => row.nome,
            sortable: true,
            style: {
                fontSize: '1rem'
            },
        },
        {
            name: "Email",
            selector: row => row.email,
            sortable: true,
            wrap: true,
            hide: 'md',
            style: {
                fontSize: '1rem'
            },
        },
        {
            name: "Telefone",
            selector: row => row.telefone,
            sortable: true,
            hide: 'md',
            right: true,
            style: {
                fontSize: '1rem'
            },
        },
        {
            name: "Orcamento",
            selector: row => row.orcamentos.length,
            sortable: true,
            right: true,
            style: {
                fontSize: '1rem'
            },
        },
        {
            name: "Total",
            selector: row => {
                row.orcamentos.map((data) => {
                    somar = somar + parseFloat(data.valor)
                })
                return somar
            },
            sortable: true,
            right: true,
            style: {
                fontSize: '1rem'
            },
        },
        {
            name: "Ações",
            selector: row => row.campo6,
            wrap: true,
            button: true,
            cell: (row) => <ButtonTabelas id={row.campo1}/>
        },
    ];

    const paginationOptions = {
        rowsPerPageText: 'Filas por página',
        rangeSeparatorText: 'de',

    };

    
    return (  
        <DataTable columns={columns} data={infoOrcamento} pagination paginationComponentOptions={paginationOptions} />
    );    
}