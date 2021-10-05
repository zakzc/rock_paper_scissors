import React from 'react'
// assets
import Winning from '../assets/img/winning.png'
import Loosing from '../assets/img/loosing.png'
// boot
import Table from 'react-bootstrap/Table'

const gameData = [
    { round: 1, choice: ['rock', 'scissor', 'scissor'], scores: [true, false, false] },
    { round: 2, choice: ['rock', 'paper', 'scissor'], scores: [false, false, false] },
    { round: 3, choice: ['paper', 'rock', 'paper'], scores: [true, false, true] },
    { round: 4, choice: ['paper', 'scissor', 'paper'], scores: [false, true, false] },
]

const ResultsTable: React.FC = (): any => {
    const References = () => (
        <Table>
            <tbody>
                <thead>References:</thead>
                <tr>
                    <img src={Winning} alt="victory" className="table-image-victory" />
                    <td>Victory</td>
                </tr>
                <tr>
                    <img src={Loosing} alt="defeat" className="table-image-defeat" />
                    <td>Defeat</td>
                </tr>
            </tbody>
        </Table>
    )
    return (
        <Table borderless hover responsive className="results-table centered">
            <thead>
                <tr>
                    <th>Round</th>
                    <th>User</th>
                    <th>Player 1</th>
                    <th>Player 2</th>
                </tr>
            </thead>
            <tbody>
                {gameData.map((r, i) => (
                    <tr key={i}>
                        <td>{r.round}</td>
                        <td>
                            {r.scores[0] === true ? (
                                <img src={Winning} alt="victory" className="table-image-victory" />
                            ) : (
                                <img src={Loosing} alt="defeat" className="table-image-defeat" />
                            )}
                            <p>{r.choice[0]}</p>
                        </td>
                        <td>
                            {r.scores[1] === true ? (
                                <img src={Winning} alt="victory" className="table-image-victory" />
                            ) : (
                                <img src={Loosing} alt="defeat" className="table-image-defeat" />
                            )}
                            <p>{r.choice[1]}</p>
                        </td>
                        <td>
                            {r.scores[2] === true ? (
                                <img src={Winning} alt="victory" className="table-image-victory" />
                            ) : (
                                <img src={Loosing} alt="defeat" className="table-image-defeat" />
                            )}
                            <p>{r.choice[2]}</p>
                        </td>
                    </tr>
                ))}
            </tbody>
            <References />
        </Table>
    )
}

export default ResultsTable
