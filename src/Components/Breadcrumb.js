import React from 'react';

export default function Breadcrumbs(props) {
    return (
        <div className="col-md-12 col-lg-10 offset-lg-1 font-weight-semiBold fs-4">
            Orçamento <span className={ changeTextColor(props) }>{ changeRoute(props) }</span>
        </div>
    );
}

function changeRoute(props) {
    return props.route;
}

function changeTextColor(props) {
    return "fw-bold "+ props.textColor;
}