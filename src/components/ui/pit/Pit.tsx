import React from 'react';
import './styling/Pit.scss';

interface Props {
id: number;
weight: number; // how many seeds in a pit
enabled: boolean;
onClick: (id:number)=>void;
className: string;
}

function Pit({id,weight,enabled, onClick, className}: Props){
    let disabled: boolean = weight === 0 || enabled === false

    return (
        <button disabled={disabled} className={`pit ${disabled?'disabled':'active ' + className}`} onClick={()=>onClick(id)}>{weight}</button>
    )
}

export default Pit