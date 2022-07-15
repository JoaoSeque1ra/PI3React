import React from 'react';

export default function CheckBoxMini(props) {
    return (
        <div className="col-lg-3 mt-3">
            <div className="form-check">
                <input className="form-check-input cursor-pointer text-blue changeInput" type="checkbox" value={props.id} id={props.id} />
                <label className="form-check-label" htmlFor={props.id}>
                    {props.text}
                </label>
            </div>
        </div>
    )
}