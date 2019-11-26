import React from 'react';
import {Header, Title, Content, Paragraph, Overlay} from './style.js';
import {Container, Row, Col} from 'reactstrap';
function AboutHeader () {
    return (
        <Header>
            <Overlay />
            <Container fluid>
                <Row>
                    <Col sm={12}>
                        <Content className={'text-center'}>
                            <Title className="text-light">About Us</Title>
                            <Paragraph className='text-light lead'>
                                <p>
                                We are passionate about education
                                </p>
                            </Paragraph>
                        </Content>
                    </Col>
                </Row>
            </Container>
        </Header>
    );
}

export default AboutHeader;