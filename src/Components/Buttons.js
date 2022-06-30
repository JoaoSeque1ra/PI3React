import React from 'react';

export default function Buttons(props) {
    return (
        <button type="button" className= { changeColorButton(props) } onClick={createEvent(props)}>
            { changeText(props) }
        </button>
    );
}

function changeColorButton(props) {
    return "btn btn-lg rounded-0 " + props.color;
}

function changeText(props) {
    return props.text;
}

function createEvent(props) {
    return props.function;
}