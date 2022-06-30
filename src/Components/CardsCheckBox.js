import React from 'react';

export default function CardsCheckBox(props) {
    return (
        <div className="card rounded-0 border-top-0">
            <div className="card-body">
                { changeText(props) }
            </div>
        </div>
    );
}

function changeText(props) {
    return props.text;
}