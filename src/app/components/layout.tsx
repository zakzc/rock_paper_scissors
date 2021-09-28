import React from 'react'
// bootstrap
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
// components
import ChoicePanel from './choicePanel'
import GameView from './gameView'
import Header from './header'
import PlayGame from './playGame'
import ResultsTable from './resultsTable'

const Layout: React.FC = (): any => {
    return (
        <Container fluid className="layout">
            <Row>
                <Col>
                    <Header />
                </Col>
            </Row>
            <Row className="space-between-rows">
                <Col></Col>
                <Col>
                    <ChoicePanel />
                </Col>
                <Col>
                    <ResultsTable />
                </Col>
                <Col></Col>
            </Row>
            <Row className="space-between-rows">
                <Col></Col>
                <Col>
                    <PlayGame />
                </Col>
                <Col></Col>
            </Row>
            <Row className="space-between-rows">
                <Col></Col>
                <Col>
                    <GameView />
                </Col>
                <Col></Col>
            </Row>
        </Container>
    )
}

export default Layout
