import React, { ReactElement } from 'react'
//import { AppContext } from '../state/context'
// assets
import Rock from '../assets/img/stone.png'
import Paper from '../assets/img/paper.png'
import Scissors from '../assets/img/scissors.png'
// boot
import Row from 'react-bootstrap/Row'
// state
import { useAppContext } from '../state/context'

const ChoicePanel: React.FC = (): ReactElement<any> => {
    const { userChoice } = useAppContext()
    return (
        <div className="choice-panel">
            <h2 className="choice-papel-header">Choose your option:</h2>
            <div className="playGame">
                <Row>
                    <button className={userChoice === 'rock' ? 'button-selected' : 'button'}>
                        <img src={Rock} alt="Rock" className="game-button-image" />
                    </button>
                    {userChoice}
                    <button className={userChoice === 'paper' ? 'button-selected' : 'button'}>
                        <img src={Paper} alt="Paper" className="game-button-image" />
                    </button>

                    <button className={userChoice === 'scissors' ? 'button-selected' : 'button'}>
                        <img src={Scissors} alt="Scissors" className="game-button-image" />
                    </button>
                </Row>
            </div>
        </div>
    )
}

export default ChoicePanel
