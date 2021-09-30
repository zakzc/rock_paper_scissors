import React from 'react'
// assets
import Rock from '../assets/img/stone.png'
import Paper from '../assets/img/paper.png'
import Scissors from '../assets/img/scissors.png'
// boot
import Row from 'react-bootstrap/Row'

const ChoicePanel: React.FC = (): any => {
    return (
        <div className="choice-panel">
            <h2 className="choice-papel-header">Choose your option:</h2>
            <div className="playGame">
                <Row>
                    <button className="button">
                        <img src={Rock} alt="Rock" className="game-button-image" />
                    </button>

                    <button className="button-selected">
                        <img src={Paper} alt="Paper" className="game-button-image" />
                    </button>

                    <button className="button">
                        <img src={Scissors} alt="Scissors" className="game-button-image" />
                    </button>
                </Row>
            </div>
        </div>
    )
}

export default ChoicePanel
