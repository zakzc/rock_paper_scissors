import React from 'react'
// assets
import Play from '../assets/svg/play.svg'

const PlayGame: React.FC = (): any => {
    return (
        <div className="playGame centered">
            <img src={Play} alt="Play" className="play-button" />
        </div>
    )
}

export default PlayGame
