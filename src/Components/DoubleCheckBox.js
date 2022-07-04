import React, { useState } from 'react';

import Icons from '../Helpers/ExportIcons';

export default function DoubleCheckBox(props) {
    const [isActive, setIsActive] = useState(false);

    const handleClick = event => {
        setIsActive(isActive => !isActive); //(current == false) => (current == true) TRUE -> foi selecionado
    };

    function changeIcon(props) {
        switch (props.name) {
            case "Marketing Digital":
                return < Icons.MarketingDigitalIcon className={isActive ? onClickChangeColorIcon() : classIcon(props)} />
            case "Design Grafico":
                return < Icons.DesignGrafico className={isActive ? onClickChangeColorIcon() : classIcon(props)} />
            default:
                console.log("Erro ao carregar icon no componente DoubleCheckBox");
                break;
        }
    }

    return (
        <div className='col-12'>
            <div className='row'>

                <div className='col-12 col-lg-6  mt-5'>

                    <div className="d-flex align-items-center">
                        <label className={isActive ? onClickChangeColor(props) : changeColor(props)} htmlFor={nameCheckBox1(props)}>
                            {changeIcon(props)}
                            {changeNameLabel1(props)}
                            <input id={nameCheckBox1(props)} type="checkbox" className={changeColorCheck(props)} onClick={handleClick} onChange={createEventOnChange(props)} defaultValue={changeNameLabel1(props)}/>
                        </label>
                    </div>

                </div>

                <div className='col-12 col-lg-6 mt-5'>

                    <div className="d-flex align-items-center">
                        <label className={isActive ? onClickChangeColor(props) : changeColor(props)} htmlFor={nameCheckBox2(props)}>
                            {changeIcon(props)}
                            {changeNameLabel2(props)}
                            <input id={nameCheckBox2(props)} type="checkbox" className={changeColorCheck(props)} onClick={handleClick} defaultValue={changeNameLabel2(props)} onChange={createEventOnChange(props)}  />
                        </label>
                    </div>

                </div>

            </div>
        </div>

        // <div className="d-flex align-items-center mt-5">
        //     <label className={isActive ? onClickChangeColor(props) : changeColor(props)} htmlFor={nameCheckBox(props)}>
        //         {changeIcon(props)}
        //         {changeNameLabel(props)}
        //         <input id={nameCheckBox(props)} type="checkbox" className={changeColorCheck(props)} onClick={handleClick} onChange={createEventOnChange(props)} value={changeNameLabel(props)} />
        //     </label>
        // </div>
    );
}

function nameCheckBox1(props) {
    return props.nameCheckBox1
}

function nameCheckBox2(props) {
    return props.nameCheckBox1
}

function changeNameLabel1(props) {
    return props.name1;
}

function changeNameLabel2(props) {
    return props.name2;
}


//-------------------------------
function changeColor(props) {
    return "form-check ps-3 py-2 w-100 fs-5 border cursor-pointer bg-checkBox " + props.color;
}

function onClickChangeColor(props) {
    return "form-check ps-3 py-2 w-100 fs-5 border text-white cursor-pointer " + props.color;
}

function classIcon(props) {
    return "iconCheckBox me-2 " + props.colorIcon;
}

function onClickChangeColorIcon() {
    return "iconCheckBox me-2 colorIconWhite ";
}

function changeColorCheck(props) {
    return "form-check-input float-end ms-0 me-3 " + props.textColor
}

function createEventOnChange(props) {
    return props.onChange;
}

