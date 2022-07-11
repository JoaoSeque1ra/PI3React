import React from 'react';

import ExportIcons from '../../../Helpers/ExportIcons';

export default function TableTrMd({id, nome, valor}) {
    return (
        <tr>
            <th className="fw-normal" scope="row">
                {id}
            </th>
            <td>{nome}</td>
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