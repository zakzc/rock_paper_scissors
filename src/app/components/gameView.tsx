import React from 'react'
// assets
import Rock from '../assets/img/stone.png'
import Paper from '../assets/img/paper.png'
import Scissors from '../assets/img/scissors.png'
// boot
import Table from 'react-bootstrap/Table'

const GameView: React.FC = (): any => {
    // * data
    let playerYou = 'scissors'
    let player1 = 'rock'
    let player2 = 'paper'
    let winner = 2
    // draw = 3

    const playerImage: any = (choice: any) => {
        if (choice === 'rock') {
            return Rock
        } else if (choice === 'paper') {
            return Paper
        } else {
            return Scissors
        }
    }

    // * view
    return (
        <Table borderless className="game-view">
            <tbody>
                <tr>
                    <th colSpan={2}>You</th>
                    <th colSpan={2}>Player 1</th>
                    <th colSpan={2}>Player 2</th>
                </tr>
                <tr>
                    <td colSpan={2}>
                        <div className={winner === 1 || winner === 3 ? 'winner' : 'loser'}>
                            <img src={playerImage(player1)} alt={player1} className="game-button-image" />
                        </div>
                    </td>
                    <td colSpan={2}>
                        <div className={winner === 0 || winner === 3 ? 'winner' : 'loser'}>
                            <img src={playerImage(playerYou)} alt={playerYou} className="game-button-image" />
                        </div>
                    </td>
                    <td colSpan={2}>
                        <div className={winner === 2 || winner === 3 ? 'winner' : 'loser'}>
                            <img src={playerImage(player2)} alt={player1} className="game-button-image" />
                        </div>
                    </td>
                </tr>
            </tbody>
        </Table>
    )
}

export default GameView
