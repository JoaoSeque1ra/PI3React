import React from 'react';
import { Link } from 'react-router-dom';

export default function Buttons(props) {
    if(props.to != "") {
        return (
            <Link to={"/client/" + props.to} className= { changeColorButton(props) } onClick={(value) => props.onClick(value)}>
                { props.text }
            </Link>
        );
    }

    return (
        <button className= { changeColorButton(props) } onClick={(value) => props.onClick(value)}>
            { props.text }
        </button>
    );

}

function changeColorButton(props) {
    return "btn btn-lg rounded-0 " + props.color;
}