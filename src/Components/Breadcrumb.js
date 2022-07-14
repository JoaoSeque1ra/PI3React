import React from 'react';

export default function Breadcrumbs(props) {
    return (
        <div className="col-md-12 col-lg-10 offset-lg-1 font-weight-semiBold fs-4">
            { changeRoute1(props) } <span className={ changeTextColor(props) }>{ changeRoute2(props) }</span>
        </div>
    );
}

function changeRoute2(props) {
    return props.route2;
}

function changeRoute1(props) {
    return props.route1;
}

function changeTextColor(props) {
    return "fw-bold "+ props.textColor;
}