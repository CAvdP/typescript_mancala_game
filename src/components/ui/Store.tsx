import React from 'react';
import './Store.scss';

interface Props{
    weight:number;
    className:string;
}

function Store({weight,className}: Props){
return (
    <div className={`store ${className}`}>{weight}</div>
)
}

export default Store