import React from 'react';
import './styling/Store.scss';

interface Props{
    weight:number;
    enabled:boolean;
    className:string;
}

function Store({weight, enabled,className}: Props){
return (
    <div className={`store ${enabled === true ? className: 'disabled'}`}>{weight}</div>
)
}

export default Store