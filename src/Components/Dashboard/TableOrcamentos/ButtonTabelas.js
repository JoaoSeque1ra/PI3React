import React from 'react';
import { Link } from 'react-router-dom';

import ExportIcons from '../../../Helpers/ExportIcons';


export default function ButtonTabelas(props) {
    return (
        <>
            <Link to={props.route + props.id} className="btn btn-light border border-light rounded me-2">
                <ExportIcons.EditOrcamento />
            </Link>
            <Link to={"/client"} className="btn btn-light border border-light rounded">
                <ExportIcons.Ver />
            </Link>
        </>
    )
}