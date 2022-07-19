import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import axios from 'axios'

import EstadoTabelas from './EstadoTabelas';
import ButtonTabelas from './ButtonTabelas';

export default function Tables() {
    const [infoOrcamento, setInfoOrcamento] = useState([]);

    useEffect(()=>{
        const urlBase = "http://localhost:3001/orcamento/listOrcamento"
        axios.get(urlBase)
        .then(response => {
            if(response.data.success) {
                const data = response.data.data
                console.log(data)
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
            name: "Orçamentos",
            selector: row => "#" + row.id,
            sortable: true,
            minWidth: "8%",
            maxWidth: "10%",
            style: {
                fontSize: '1rem'
            },
        },
        {
            name: "Nome",
            selector: row => row.cliente.nome,
            sortable: true,
            style: {
                fontSize: '1rem'
            },
        },
        {
            name: "Data",
            selector: row => row.data_orcamento,
            sortable: true,
            hide: 'md',
            style: {
                fontSize: '1rem'
            },
        },
        {
            name: "Estado",
            selector: row => row.estadoPedido.estado,
            sortable: true,
            center: true,
            hide: 'md',
            cell: row => (
                <EstadoTabelas estado={row.estadoPedido.estado}/>
            ),
            style: {
                fontSize: '1rem'
            },
        },
        {
            name: "Total",
            selector: row => row.valor + "€",
            sortable: true,
            right: true,
            style: {
                fontSize: '1rem'
            },
        },
        {
            name: "Ações",
            button: true,
            cell: (row) => <ButtonTabelas route={"/dashboard/editar-orcamento/"} id={row.id}/>
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