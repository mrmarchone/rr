import React from 'react';
import {Header, Title, Content, Paragraph, Overlay} from './style.js';
import {Container, Row, Col, Button} from 'reactstrap';
function OnlineReqHeader () {
    return (
        <Header>
            <Overlay />
            <Container fluid>
                <Row>
                    <Col sm={12}>
                        <Content className={'text-center'}>
                            <Title className="text-light">How we support online recrutment?</Title>
                            <Paragraph className='text-light lead'>
                                <p>
                                Be prepared for a rigorous, challenging program that requires consistency, discipline, and accountability.
                                <br /> 
                                By the end of these tracks, you will have the skills to conquer your career.
                                </p>
                            </Paragraph>
                            <Button style={{
                                'backgroundColor': '#308EBF',
                                'border': 'none',
                                'borderRadius': '15px',
                                'padding': '15px 20px'
                            }}>Learn More</Button>
                        </Content>
                    </Col>
                </Row>
            </Container>
        </Header>
    );
}

export default OnlineReqHeader;