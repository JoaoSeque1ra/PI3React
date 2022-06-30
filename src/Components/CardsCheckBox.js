import React from 'react';

export default function CardsCheckBox(props) {
    return (
        <div class="card rounded-0 border-top-0">
            <div class="card-body">
            { changeText(props) }
            </div>
        </div>
    );
}

function changeText(props) {
    return props.text;
}