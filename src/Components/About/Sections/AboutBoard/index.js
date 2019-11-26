import React, {Component} from 'react';
import {Container, Row, Col} from 'reactstrap';
import Man from './man.png';
import {Box} from './style';
class AboutBoard extends Component {
    render () {
        return (
            <section style={{
                paddingTop: '50px',
                paddingBottom: '50px',
            }}>
                <Container>
                    <Row>
                        <Col xs={12} className="text-center">
                            <h1>The Guide Education Board</h1>
                        </Col>
                        <Col sm={4}>
                            <div className={'item'}>
                                <Box className={'text-center p-5'}>
                                    <img src={Man} />
                                    <h3>Mark David</h3>
                                    <p>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,good.
                                    </p>
                                </Box>
                            </div>
                        </Col>
                        <Col sm={4}>
                            <div className={'item'}>
                                <Box className={'text-center p-5'}>
                                    <img src={Man} />
                                    <h3>Mark David</h3>
                                    <p>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,good.
                                    </p>
                                </Box>
                            </div>
                        </Col>
                        <Col sm={4}>
                            <div className={'item'}>
                                <Box className={'text-center p-5'}>
                                    <img src={Man} />
                                    <h3>Mark David</h3>
                                    <p>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,good.
                                    </p>
                                </Box>
                            </div>
                        </Col>
                        <Col sm={4}>
                            <div className={'item'}>
                                <Box className={'text-center p-5'}>
                                    <img src={Man} />
                                    <h3>Mark David</h3>
                                    <p>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,good.
                                    </p>
                                </Box>
                            </div>
                        </Col>
                        <Col sm={4}>
                            <div className={'item'}>
                                <Box className={'text-center p-5'}>
                                    <img src={Man} />
                                    <h3>Mark David</h3>
                                    <p>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,good.
                                    </p>
                                </Box>
                            </div>
                        </Col>
                        <Col sm={4}>
                            <div className={'item'}>
                                <Box className={'text-center p-5'}>
                                    <img src={Man} />
                                    <h3>Mark David</h3>
                                    <p>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,good.
                                    </p>
                                </Box>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        );
    }
}


export default AboutBoard;