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
                    <td>Mark</td>
                    <td>Otto</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Larry the Bird</td>
                    <td>Larry the Bird</td>
                </tr>
            </tbody>
        </Table>
    )
}

export default ResultsTable
