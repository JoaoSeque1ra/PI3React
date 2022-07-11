import React from 'react';

export default function PacksInput({ onChange, nomePack, valor }) {
    return (
        <div className="col-md-12 col-lg-2 text-end">
            <label htmlFor="basic-url" className="form-label fw-light">{nomePack}</label>
            <div className="input-group mb-3">
                <input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3" placeholder={valor} onChange={onChange}/>
            </div>
        </div>
    );
}