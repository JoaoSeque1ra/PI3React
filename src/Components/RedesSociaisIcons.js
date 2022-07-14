import React from 'react';

import Icons from '../Helpers/ExportIcons';

export default function RedesSociaisIcons({nome}) {
    function changeIcon(nome) {
        switch (nome) {
            case "facebook":
                return < Icons.Facebook  />
            case "insta":
                return < Icons.Insta  />
            case "twitter":
                return < Icons.Twitter  />
            case "tiktok":
                return < Icons.Tiktok  />
            case "pint":
                return < Icons.Pint  />
            case "google":
                return < Icons.Google  />
            case "link":
                return < Icons.LinkDin  />
            case "youtube":
                return < Icons.Youtube  />
            default:
                console.log("Erro ao carregar icon no componente CheckBox");
                break;
        }
    }

    return (
        <button className="col-lg-2 mb-5 me-5 border-0 bg-transparent">
            {changeIcon(nome)}
        </button>
    );
}