import React from 'react';
import { Link } from 'react-router-dom';

export default function Buttons(props) {
    return (
        <Link to={"/client/" + props.route} className= { changeColorButton(props) }>
            { props.text }
        </Link>
    );
}

function changeColorButton(props) {
    return "btn btn-lg rounded-0 " + props.color;
}