import React from 'react';
import './styling/MessageBoard.scss';

interface Props {
 playerOneTurn: boolean;
}

function MessageBoard({playerOneTurn}: Props){
    const message = playerOneTurn? 'Player one': 'Player two';

    return (
        <button className={'message-board neon_pink_blue'} onClick={()=>{}}>{message}</button>
    )
}

export default MessageBoard