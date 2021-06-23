import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { FcAlarmClock } from 'react-icons/fc'

function App() {
  return (
    <>
      <Container>
        <Row className="justify-content-md-center">
          <Col md="auto">
            <h1>
              <FcAlarmClock size="30px" />
              React Bootstrap
            </h1>
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="success">Success</Button>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default App
