import React from 'react';

export default function Buttons(props) {
    return (
        <button type="button" className= { changeColorButton(props) } onClick={props.onClick}>
            {props.text}
        </button>
    );
}

function changeColorButton(props) {
    return "btn btn-lg rounded-0 " + props.color;
}