import React from 'react';
import {Header, Title, Content, Paragraph, Buttons, Chat} from './style.js';
import {Container, Row, Col, Button} from 'reactstrap';
import ChatIcon from './chat.png';
function HomeHeader () {
    return (
        <Header>
            <Chat>
                <img src={ChatIcon} />
            </Chat>
            <Container fluid>
                <Row>
                    <Col sm={12}>
                        <Content>
                            <Title className="text-light">Smarter visual hiring.</Title>
                            <Paragraph className='text-light lead'>
                                <p>
                                    A place to house, streamline and enhance all types of digital learning Utterly flexible set up.<br />Let's get started?
                                </p>
                            </Paragraph>
                            <Buttons>
                                <Button className={'mr-4 btn1'}>Teacher</Button>
                                <Button className={'btn2'}>School</Button>
                            </Buttons>
                        </Content>
                    </Col>
                </Row>
            </Container>
        </Header>
    );
}

export default HomeHeader;