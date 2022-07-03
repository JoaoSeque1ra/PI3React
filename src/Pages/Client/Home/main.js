import React from 'react';

import Breadcrumbs from '../../../Components/Breadcrumb';
import CheckBox from '../../../Components/CheckBox';
import Buttons from '../../../Components/Buttons';

export default function Main() {
    return (
        <main>
            <div className="container-fluid">
                <div className="row vh-100">
                    <div className="col-md-12 col-lg-7 pt-pageLeft">
                        <div className="row">
                            <Breadcrumbs route=""/>

                            <div className="col-md-12 col-lg-10 offset-lg-1">
                                <CheckBox nameCheckBox="checkBox1" onChange={countOnChange1} name="Marketing Digital" color="bg-checkBoxYellow" colorIcon="colorIconYellow" textColor="text-yellow" />

                                <CheckBox nameCheckBox="checkBox2" onChange={countOnChange2} name="Design Grafico" color="bg-checkBoxYellow" colorIcon="colorIconYellow" textColor="text-yellow" />

                                <CheckBox nameCheckBox="checkBox3" onChange={countOnChange3} name="Website &#38; Loja Online" color="bg-checkBoxYellow" colorIcon="colorIconYellow" textColor="text-yellow" />

                                <CheckBox nameCheckBox="checkBox4" onChange={countOnChange4} name="Comunicação &#38; Consultoria" color="bg-checkBoxYellow" colorIcon="colorIconYellow" textColor="text-yellow" />
                            </div>

                            <div className="col-md-5 offset-md-7 col-lg-6 offset-lg-5 text-end my-5">
                                <Buttons color="bg-transparent" text="Anterior" />
                                <Buttons color="btn-yellow" text="Seguinte" />
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-md-12 col-lg-5 d-none d-lg-flex justify-content-center align-items-center bg-yellow pt-pageRight position-fixed end-0 vh-100">
                        <div className="row position-lg-fixed">
                            <div className="col-md-auto text-white fs-1 text-weight-black">
                                ativa
                                <b>e agita</b>
                                <br />
                                a tua
                                <b>marca.</b>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );

    function countOnChange1(props) {
        console.log(props.target.checked)
        console.log(props.target.value)
        console.count("teste1: ")
    }

    function countOnChange2(props) {
        console.log(props.target.checked)
        console.log(props.target.value)
        console.count("teste2: ")
    }

    function countOnChange3(props) {
        console.log(props.target.checked)
        console.log(props.target.value)
        console.count("teste3: ")
    }

    function countOnChange4(props) {
        console.log(props.target.checked)
        console.log(props.target.value)
        console.count("teste4: ")
    }
}