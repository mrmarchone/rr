import React from 'react';
import {Content, Paragraph} from './style.js';
import GuidDo from '../GuidDo';
import {Container, Row, Col, Button} from 'reactstrap';
function FaqParagraph () {
    return (
        <div>
            <Container fluid>
                <Row>
                    <Col sm={{size: 8,offset: 2}}>
                        <Content className={'text-light'}>
                            <Paragraph>
                                <h2>FAQ: Frequently Asked Questions</h2>
                                <h6>What is your teaching philosophy?</h6>
                                <br />
                                <p>
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                                </p>
                            </Paragraph>
                            <Paragraph>
                                <h6>These are the four pillars of our teaching philosophy:</h6>
                                <br />
                                <p>
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                                </p>
                            </Paragraph>
                            <Paragraph>
                                <h6>How schools benefit ?</h6>
                                <br />
                                <p>
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                                </p>
                            </Paragraph>
                            <div className={'w-100 text-center my-5'}>
                                <Button style={{
                                    'background': '#308EBF',
                                    border: 'none',
                                    'border-radius': '20px'
                                }}>Learn More</Button>
                            </div>
                            <GuidDo />
                        </Content>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default FaqParagraph;