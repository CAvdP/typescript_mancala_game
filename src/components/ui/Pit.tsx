import React from 'react';
import './Pit.scss';

interface Props {
id: number;
weight: number; // how many seeds in a pit
onClick: (id:number)=>void;
className: string;
}

function Pit({id,weight, onClick, className}: Props){
    let disabled: boolean = weight === 0

    return (
        <button disabled={disabled} className={`pit ${disabled?'disabled':'active ' + className}`} onClick={()=>onClick(id)}>{weight}</button>
    )
}

export default Pit