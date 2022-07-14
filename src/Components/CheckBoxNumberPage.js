import React, { useState } from 'react';

import Icons from '../Helpers/ExportIcons';

export default function CheckBoxNumberPage(props) {
    const [numberPage, setNumberPages] = useState(1);

    const addClick = event => {
        if (numberPage === 12) {
            window.alert("Número máximo atingido")
            return
        }
        setNumberPages(numberPage + 1);
        //console.log(numberPage)
    };

    const removeClick = event => {
        if (numberPage === 1) {
            window.alert("Número mínimo atingido")
            return
        }
        setNumberPages(numberPage - 1);
        //console.log(numberPage)
    };

    return (
        <div className="d-flex align-items-center mt-5">
            <label className="form-check ps-3 py-2 w-100 fs-5 border text-white bg-purple">
                <Icons.NumeroPaginas className={classIcon(props)} />
                Número de páginas

                <div className="btn-group float-end me-3">
                    <a className="btn btn-sm btn-light rounded" onClick={removeClick}>
                        <Icons.Remove width={22} height={22} />
                    </a>
                    <input type="number" className="text-white text-center bg-transparent border-0 px-3" value={numberPage} min={1} max={12} onChange={(valeu)=> callOnChange(valeu)} disabled/>
                    <a className="btn btn-sm btn-light rounded" onClick={addClick}>
                        <Icons.Add className='colorIconBlack' width={22} height={22} />
                    </a>
                </div>
            </label>
        </div>
    );
}

function classIcon(props) {
    return "iconCheckBox me-2 " + props.colorIcon;
}

function callOnChange(props) {
    console.log(props.onChange)
    return props.onChange;
}