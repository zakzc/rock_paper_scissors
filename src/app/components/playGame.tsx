import React from 'react'
// assets
import Play from '../assets/svg/play.svg'
// boot
// import Button from 'react-bootstrap/Button'

const PlayGame: React.FC = (): any => {
    return (
        <div className="playGame ">
            <button className="button">
                <img src={Play} alt="Play" className="game-button-image" />
            </button>
        </div>
    )
}

export default PlayGame
