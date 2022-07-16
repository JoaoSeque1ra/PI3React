import React from 'react';

export default function PacksInput(props) {
    return (
        <div className={"col-12 text-end " + props.className}>
            <label htmlFor="basic-url" className="form-label fw-light">{props.nomePack}</label>
            <div className="input-group mb-3">
                <input type={props.type} className="form-control" id="basic-url" defaultValue={props.value} onChange={value => props.onChange(value)} pattern={props.pattern}/>
            </div>
        </div>
    );
}