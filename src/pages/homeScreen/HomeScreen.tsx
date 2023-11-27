import React, { useEffect, useState } from 'react';
import './styling/HomeScreen.scss';
import '../../styling/theme.scss'

import Pit from '../../components/ui/pit/Pit';
import Store from '../../components/ui/store/Store';
import MessageBoard from '../../components/ui/messageBoard/MessageBoard';
import Popup from '../../components/ui/popup/Popup';


const HomeScreen = ()=> {
    const posStoreP1:number = 0
    const posStoreP2:number = 7
    const START_SEEDS:number[] = [0,4,4,4,4,4,4,0,4,4,4,4,4,4]
    const [seeds, setSeeds] = useState<number[]>(START_SEEDS);
    const [playerOneTurn, setPlayerOneTurn] = useState<boolean>(true);
    const [showPopup, setShowPopup] = useState<boolean>(false)

    useEffect(()=>{
        if(seeds[posStoreP1] > 24 || seeds[posStoreP2] > 24 || (seeds[posStoreP1] + seeds[posStoreP2] === 48)){
            setShowPopup(true);
        }
    },[seeds])


    function startMove(chosenPit:number){
        let seedsToDistribute:number = seeds[chosenPit]
        let newSeeds:number[] = [...seeds]
        const handWillPassP1Store:boolean = chosenPit< posStoreP2 && chosenPit+seedsToDistribute > posStoreP2
        const handWillPassP2Store:boolean = chosenPit+seedsToDistribute > 13
        // Extend length of loop in case store must be skipped //
        if(handWillPassP1Store && playerOneTurn === true){seedsToDistribute++;}
        if(handWillPassP2Store && playerOneTurn === false){seedsToDistribute++;}
        // Start dividing the seeds // 
        for (let i = 0; i < seedsToDistribute; i++) {

            const nextPos = chosenPit+i+1;
            // When update passes last position move to first pos again //
            const posToUpdate:number = nextPos > newSeeds.length-1 ? nextPos-newSeeds.length : nextPos;
            const isLastSeedinHand:boolean = i === seedsToDistribute-1;
            const triesToUpdateP1Store:boolean = posToUpdate === posStoreP1;
            const triesToUpdateP2Store:boolean = posToUpdate === posStoreP2;
            // Skip update of store depending on who's turn //
            if(triesToUpdateP1Store && playerOneTurn === false){continue}
            if(triesToUpdateP2Store && playerOneTurn === true){continue}
            // Update the weight of the new position //
            const oldWeight:number = newSeeds[posToUpdate]
            // Check for special rule
            if(oldWeight === 0 && isLastSeedinHand && !triesToUpdateP1Store && !triesToUpdateP2Store){
                let oppositePit = 14 - posToUpdate
                let weightOfOpposite = newSeeds[oppositePit] + 1;
                // Handle opposite of selected pit 1 to 6 
                if(posToUpdate < 7 && playerOneTurn === false){
                    newSeeds[posStoreP2] = newSeeds[posStoreP2] + weightOfOpposite;
                    newSeeds[chosenPit] = 0;
                    newSeeds[oppositePit] = 0;
                    setPlayerOneTurn(!playerOneTurn);
                    continue;
                }
                // Handle opposite of selected pit 7 to 12
                if(posToUpdate > 7 && playerOneTurn === true){
                    newSeeds[posStoreP1] = newSeeds[posStoreP1] + weightOfOpposite;
                    newSeeds[chosenPit] = 0;
                    newSeeds[oppositePit] = 0;
                    setPlayerOneTurn(!playerOneTurn);
                    continue;
                } 
            }
            // Update weight of the pit in this for loop cycle
            newSeeds[posToUpdate] = oldWeight+1
            // Empty selected pit //   
            newSeeds[chosenPit]=0
            // Check whether last seed falls into Store, if so continue turn //
            if((isLastSeedinHand && triesToUpdateP1Store) || (isLastSeedinHand && triesToUpdateP2Store)){continue}
            if(isLastSeedinHand){setPlayerOneTurn(!playerOneTurn)}
        }
        // Update all seeds in state //
        setSeeds(newSeeds)
    }

    function ResetGame() {
        setSeeds(START_SEEDS);
        setPlayerOneTurn(true);
        setShowPopup(false)
    };


    return (
       <div id='screen'>
        {showPopup && <Popup player1Points={seeds[posStoreP1]} player2Points={seeds[posStoreP2]} resetFunction={ResetGame}/>}
        <button id='restart-btn' className='neon_pink_blue btn' onClick={()=> ResetGame()}>Restart</button>
        <div id='board'>    
            <div id='top_row_pits'>
                <Pit id={6} weight={seeds[6]} enabled={playerOneTurn === false} onClick={startMove} className='neon_pink'/>
                <Pit id={5} weight={seeds[5]} enabled={playerOneTurn === false} onClick={startMove} className='neon_pink'/>
                <Pit id={4} weight={seeds[4]} enabled={playerOneTurn === false} onClick={startMove} className='neon_pink'/>
                <Pit id={3} weight={seeds[3]} enabled={playerOneTurn === false} onClick={startMove} className='neon_pink'/>
                <Pit id={2} weight={seeds[2]} enabled={playerOneTurn === false} onClick={startMove} className='neon_pink'/>
                <Pit id={1} weight={seeds[1]} enabled={playerOneTurn === false} onClick={startMove} className='neon_pink'/>
            </div>
            <div id='middle_section'>
                <Store weight={seeds[7]} enabled={playerOneTurn ===false} className='neon_pink'/>
                <MessageBoard playerOneTurn={playerOneTurn} />
                <Store weight={seeds[0]} enabled={playerOneTurn ===true} className='neon_blue'/>
            </div>
            <div id='bottom_row_pits'>
                <Pit id={8} weight={seeds[8]} enabled={playerOneTurn ===true} onClick={startMove} className='neon_blue'/>
                <Pit id={9} weight={seeds[9]} enabled={playerOneTurn ===true} onClick={startMove} className='neon_blue'/>
                <Pit id={10} weight={seeds[10]} enabled={playerOneTurn ===true} onClick={startMove} className='neon_blue'/>
                <Pit id={11} weight={seeds[11]} enabled={playerOneTurn ===true} onClick={startMove} className='neon_blue'/>
                <Pit id={12} weight={seeds[12]} enabled={playerOneTurn ===true} onClick={startMove} className='neon_blue'/>
                <Pit id={13} weight={seeds[13]} enabled={playerOneTurn ===true} onClick={startMove} className='neon_blue'/>
            </div>
    </div>
    </div> 
    )

   
}
  
  export default HomeScreen;