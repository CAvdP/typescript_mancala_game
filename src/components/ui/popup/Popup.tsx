import React from 'react';
import './styling/Popup.scss';

interface Props {
player1Points: number;
player2Points: number;
resetFunction: ()=> void;
}

function Pit({player1Points, player2Points, resetFunction}: Props){
    let winner = player1Points > player2Points ? 'Player one': 'Player two'
    let winnerPoints = winner === 'Player one'? player1Points: player2Points

    return (
        <div id='pop-up' className={winner === 'Player one' ? 'neon_blue' :'neon_pink'}>
            <h1>{`${winner} won with ${winnerPoints} points!`} </h1>
            <button className='neon_pink_blue btn' onClick={()=> resetFunction()}>Reset</button>
        </div>
    )
}

export default Pit