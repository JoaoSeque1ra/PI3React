import React from 'react';

export default function BreadcrumbsDashboard({route1, route2}) {
    return (
        <div className="col-9 col-lg-8 font-weight-semiBold fs-4 text-gray">
            {route1} <span className="font-weight-bold text-dark">{route2}</span>
        </div>
    );
}