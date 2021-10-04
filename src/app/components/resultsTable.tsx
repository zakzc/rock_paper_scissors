import React from 'react'
// assets
import Winning from '../assets/img/winning.png'
import Loosing from '../assets/img/loosing.png'
// boot
import Table from 'react-bootstrap/Table'

const devData = [
    { round: 1, result: [true, false, false] },
    { round: 2, result: [false, false, false] },
    { round: 3, result: [true, false, true] },
    { round: 4, result: [false, true, false] },
]

const ResultsTable: React.FC = (): any => {
    return (
        <Table striped borderless hover responsive className="results-table centered">
            <thead>
                <tr>
                    <th>Round</th>
                    <th>User</th>
                    <th>Player 1</th>
                    <th>Player 2</th>
                </tr>
            </thead>
            <tbody>
                {devData.map((r, i) => (
                    <tr key={i}>
                        <td>{r.round}</td>
                        <td>
                            {r.result[0] === true ? (
                                <img src={Winning} alt="victory" className="table-image-victory" />
                            ) : (
                                <img src={Loosing} alt="defeat" className="table-image-defeat" />
                            )}
                        </td>
                        <td>
                            {r.result[1] === true ? (
                                <img src={Winning} alt="victory" className="table-image-victory" />
                            ) : (
                                <img src={Loosing} alt="defeat" className="table-image-defeat" />
                            )}
                        </td>
                        <td>
                            {r.result[2] === true ? (
                                <img src={Winning} alt="victory" className="table-image-victory" />
                            ) : (
                                <img src={Loosing} alt="defeat" className="table-image-defeat" />
                            )}
                        </td>
                    </tr>
                ))}
                {/* <tr>
                    <td>1</td>
                    <td>false</td>
                    <td>false</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Draw</td>
                    <td>No one</td>
                    <td> 1</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Victory</td>
                    <td>User</td>
                    <td> 1</td>
                </tr> */}
            </tbody>
        </Table>
    )
}

export default ResultsTable
