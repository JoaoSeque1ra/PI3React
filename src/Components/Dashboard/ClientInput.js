import React from 'react';

export default function ClientInput(props) {
    return (
        <>
            <div className="col-lg-1 mb-3 pb-3 ms-5">
                <label htmlFor={props.id} className="form-label">{props.text}</label>
            </div>
            <div className="col-lg-10">
                <input type="text" className="form-control" id={props.id} value={props.value} onChange={(valeu) => props.onchange(valeu)}/>
            </div>
        </>
    );
}