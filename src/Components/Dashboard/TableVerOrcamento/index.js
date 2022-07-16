import React from 'react';
import DataTable, { createTheme } from 'react-data-table-component';

export default function TablesVerOrcamento(props) {
    createTheme('teste', {
        background: {
            default: '#0000000'
        }
    })

    const total = (row) => {
        const total = parseFloat(row.valor * row.quantidade).toFixed(2)
        return parseFloat(total * .23 + parseFloat(total)).toFixed(2)
    }

    const iva = (row) => {
        const total = parseFloat(row.valor * row.quantidade).toFixed(2)

        return parseFloat(total * .23).toFixed(2)
    }

    const columns = [
        {
            name: "Serviço",
            selector: row => row.descricaoServico.descricao,
            style: {
                fontSize: '1rem',
            },
        },
        {
            name: "Custo",
            selector: row => row.valor,
            cell: (row) => <input id={row.id} type="number" className='w-100' onChange={(value) => props.onChangeValor(value)} defaultValue={row.valor} />,
            style: {
                fontSize: '1rem',
            },
        },
        {
            name: "Quantidade",
            selector: row => row.quantidade,
            sortable: true,
            center: true,
            cell: (row) => <input id={row.id} type="number" className='w-100 text-center' defaultValue={row.quantidade} onChange={(value) => props.onChangeQuantidade(value)} />,
            style: {
                fontSize: '1rem',
            },
        },
        {
            name: "Total",
            selector: row => total(row),
            right: true,
            style: {
                fontSize: '1rem',
            },
        },
        {
            name: "Iva",
            selector: row => iva(row),
            right: true,
            hide: 'sm',
            style: {
                fontSize: '1rem',
            },
        }
    ]   

    // console.log(props.contems)
    return (
        <DataTable columns={columns} data={props.contems} theme="teste"/>
    );
}