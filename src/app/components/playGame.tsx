import React from 'react'
// assets
import Play from '../assets/svg/play.svg'
// boot
//import Button from 'react-bootstrap/Button'
// utils
import getPlayerChoice from '../utils/playerChoice'

const PlayGame: React.FC = (): any => {
    let myVal = getPlayerChoice()

    return (
        <div className="playGame ">
            <button className="button">
                <img src={Play} alt="Play" className="game-button-image" />
            </button>
            {myVal}
        </div>
    )
}

export default PlayGame
