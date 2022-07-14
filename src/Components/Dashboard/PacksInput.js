import React from 'react';

export default function PacksInput({ onChange, nomePack, valor, className }) {
    return (
        <div className={"col-12 text-end " + className}>
            <label htmlFor="basic-url" className="form-label fw-light">{nomePack}</label>
            <div className="input-group mb-3">
                <input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3" placeholder={valor} onChange={onChange} />
            </div>
        </div>
    );
}