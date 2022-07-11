import React from 'react';

import ExportIcons from '../../../Helpers/ExportIcons';

export default function TableTrLg({ id, nome, data, estado, valor }) {
    return (
        <tr>
            <th className="fw-normal" scope="row">
                {id}
            </th>
            <td>{nome}</td>
            <td>{data}</td>
            <td className="d-flex justify-content-center">
                <div className={changeEstado(estado)}>
                    {estado}
                </div>
            </td>
            <td className="text-end">{valor}</td>
            <td className="text-center">
                <div className="btn-group" role="group" aria-label="Basic example">
                    <button type="button" className="btn btn-light border border-light rounded me-2">
                        <ExportIcons.EditOrcamento />
                    </button>

                    <button type="button" className="btn btn-light border border-light rounded">
                        <ExportIcons.Ver />
                    </button>
                </div>
            </td>
        </tr>
    );
}

function changeEstado(estado) {
    switch(estado) {
        case "Novo":
            return "w-50 w-md-100 py-2 bg-red text-center text-break text-white rounded"
        case "Em tratamento":
            return "w-75 w-md-100 py-2 bg-yellow text-center text-break text-white rounded"
        case "Enviado":
            return "w-50 w-md-100 py-2 bg-gray text-center text-break text-white rounded"
        case "Confirmado":
            return "w-75 w-md-100 py-2 bg-blue text-center text-break text-white rounded"
        case "Cancelado":
            return "w-50 w-md-100 py-2 bg-grayHover text-center text-break text-white rounded"
        default:
            console.log("Erro");
            break
    }
}