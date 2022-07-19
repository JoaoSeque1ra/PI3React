import React from 'react';

import Icons from '../Helpers/ExportIcons';

export default function RedesSociaisIcons(props) {
    function changeIcon(nome) {
        switch (nome) {
            case "facebook":
                if(props.isActive)
                    return <Icons.FacebookSelect />
                return < Icons.Facebook  />
            case "insta":
                if(props.isActive)
                    return <Icons.InstaSelect />
                return < Icons.Insta  />
            case "twitter":
                if(props.isActive)
                    return <Icons.TwitterSelect />
                return < Icons.Twitter  />
            case "tiktok":
                if(props.isActive)
                    return <Icons.TiktokSelect />
                return < Icons.Tiktok  />
            case "google":
                if(props.isActive)
                    return <Icons.GoogleSelect />
                return < Icons.Google  />
            case "link":
                if(props.isActive)
                    return <Icons.LinkDinSelect />
                return < Icons.LinkDin  />
            case "youtube":
                if(props.isActive)
                    return <Icons.YoutubeSelect />
                return < Icons.Youtube  />
            default:
                console.log("Erro ao carregar icon no componente CheckBox");
                break;
        }
    }

    return (
        <button className="col-lg-2 mb-5 me-5 border-0 bg-transparent" onClick={(value) => props.onClick(value)}>
            {changeIcon(props.nome)}
        </button>
    );
}