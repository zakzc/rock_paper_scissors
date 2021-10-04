import React, { useContext } from 'react'
// assets
import Play from '../assets/svg/play.svg'
import Reload from '../assets/img/reloading.png'
// context
import { AppContext } from './application'

const PlayGame: React.FC = (): any => {
    const { startGame, setStartGame } = useContext(AppContext)
    const { setUserChoice, setPlayer1, setPlayer2 } = useContext(AppContext)

    const playGame = () => {
        setStartGame(true)
    }
    const reloadGame = () => {
        setUserChoice('paper')
        setPlayer1('')
        setPlayer2('')
        setStartGame(false)
    }

    return (
        <div className="playGame ">
            <button className="button">
                {startGame ? (
                    <img src={Reload} alt="Reload" className="game-button-image" onClick={() => reloadGame()} />
                ) : (
                    <img src={Play} alt="Play" className="game-button-image" onClick={() => playGame()} />
                )}
            </button>
        </div>
    )
}

export default PlayGame
