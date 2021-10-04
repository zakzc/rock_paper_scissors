import React from 'react'
// boot
import Table from 'react-bootstrap/Table'

const ResultsTable: React.FC = (): any => {
    return (
        <Table striped borderless hover responsive className="results-table centered">
            <thead>
                <tr>
                    <th>Round</th>
                    <th>Result</th>
                    <th>Winner</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Victory</td>
                    <td>Player 1</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Draw</td>
                    <td>No one</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Victory</td>
                    <td>User</td>
                </tr>
            </tbody>
        </Table>
    )
}

export default ResultsTable
