import React from 'react';

export default function OptionsPacks(props) {
    const array = []
    
    return (
        <>
            <div className='col-4 text-blue mt-4'>
                {props.text}
            </div>
            <div className='col-5 mt-4'>
                <select className="form-select">
                    <LoadOptions />
                </select>
            </div>
        </>
        
    );

    function LoadOptions() {
        if(array.length !== props.tamanho) {
            for(let i = 1; i <= props.tamanho; i++) {
                array.push(i)
            }
        }
        console.log(array)

        return array.map((data, index) => {
            return(
                <option key={index} value={data}>{data}</option>
            )   
        })
    }
}