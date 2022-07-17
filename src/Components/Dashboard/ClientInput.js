import React from 'react';

export default function ClientInput(props) {
    return (
        <>
            <div className="col-12 col-lg-2 text-break ps-lg-5 mb-lg-5 mb-2 mb-lg-0">
                <label htmlFor={props.id} className="form-label">{props.text}</label>
            </div>
            <div className="col-12 col-lg-9 mb-5 mb-lg-0">
                <input type="text" className="form-control" id={props.id} defaultValue={props.value} onChange={(valeu) => props.onchange(valeu)} pattern={props.pattern} required={props.requerido}/>
            </div>
            <div className='w-100'></div>
        </>
    );
}