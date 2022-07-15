import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import axios from 'axios'

import ButtonTabelas from '../TableOrcamentos/ButtonTabelas';

export default function TablesClientes() {
    const [infoOrcamento, setInfoOrcamento] = useState([]);

    let total;
    useEffect(()=>{
        const urlBase = "http://localhost:3001/orcamento/listClients"
        axios.get(urlBase)
        .then(response => {
            if(response.data.success) {
                // total = teste(response)
                return setInfoOrcamento(response.data.data)
            }

            alert(response.data.message)
        })
        .catch(err=> {
            alert("Erro: " + err)
        })
    },[infoOrcamento])

    const teste = (response) => {
        total = 0;
        const array = response.data.data
        
        array.forEach(element => {
            const arrayOrcamento = element.orcamentos
            if(arrayOrcamento.length > 0) {
                arrayOrcamento.forEach(element => {
                    console.log(element)
                    total = total + parseInt(element.valor)
                })
            }

            return total
        });

    }

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
            selector: row => row.total,
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