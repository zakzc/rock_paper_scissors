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

const Layout: React.FC = ({ children }): any => {
    return (
        <Container fluid className="layout">
            <Row>
                <Col>
                    <Header />
                </Col>
            </Row>
            <Row className="space-between-rows">
                <Col xs sm md lg="10">
                    <GameView />
                </Col>
            </Row>
            <Row className="space-between-rows">
                <Col xs sm md lg="5"></Col>
                <Col xs sm md lg="2">
                    <PlayGame />
                </Col>
                <Col xs sm md lg="5"></Col>
            </Row>
            <Row className="space-between-rows">
                <Col xs sm md lg="5">
                    <ChoicePanel />
                </Col>
                <Col></Col>
                <Col xs sm md lg="3">
                    <ResultsTable />
                </Col>
            </Row>
        </Container>
    )
}

export default Layout
