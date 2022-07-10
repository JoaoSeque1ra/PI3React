import React from 'react';

import ExportIcons from '../../Helpers/ExportIcons';

export default function TableTrLg({ id, nome, data, estado, valor }) {
    return (
        <tr>
            <th className="fw-normal" scope="row">
                {id}
            </th>
            <td>{nome}</td>
            <td>{data}</td>
            <td className="d-flex justify-content-center">
                <div className="w-50 w-md-100 py-2 bg-red text-center text-break text-white rounded">
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