import React from 'react';
import { Link } from 'react-router-dom';

export default function Buttons(props) {
    if(props.to != null) {
        return (
            <Link to={"/client/" + props.route} className= { changeColorButton(props) }>
                { props.text }
            </Link>
        );
    }

    return (
        <button to={"/client/" + props.route} className= { changeColorButton(props) } onClick={(value) => props.onClick(value)}>
            { props.text }
        </button>
    );

}

function changeColorButton(props) {
    return "btn btn-lg rounded-0 " + props.color;
}