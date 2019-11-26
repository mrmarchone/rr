import React , {Component} from 'react';
import {Container, Col, Row} from 'reactstrap';
import {Servicess, P, Icons} from './style.js';
import Icon1 from './light30.png';
import Icon3 from './idea8.png';
import Icon2 from './comment29.png';
class Services extends Component {
    render () {
        return (
            <Servicess className='pt-5 p-sm-4'>
                <Container fluid>
                    <Row>
                        <Col sm={4}>
                            <Icons className="d-flex mb-5 mb-sm-0">
                                <Col xs={3}>
                                    <img src={Icon1} className={'img-fluid'} />
                                </Col>
                                <Col xs={9}>
                                    <div className={'mt-2'}>
                                        <h4>Direct Employment</h4>
                                        <P>First call for teachers CVs</P>
                                    </div>
                                </Col>
                            </Icons>
                        </Col>
                        <Col sm={4}>
                            <Icons className="d-flex mb-5 mb-sm-0">
                                <Col xs={3}>
                                    <img src={Icon2} className={'img-fluid'} />
                                </Col>
                                <Col xs={9}>
                                    <div className={'mt-2'}>
                                        <h4>Network Excellence</h4>
                                        <P>Build reputation and profile</P>
                                    </div>
                                </Col>
                            </Icons>
                        </Col>
                        <Col sm={4}>
                            <Icons className="d-flex mb-5 mb-sm-0">
                                <Col xs={3}>
                                    <img src={Icon3} className={'img-fluid'} />
                                </Col>
                                <Col xs={9}>
                                    <div className={'mt-2'}>
                                        <h4>Wide Educational Hub</h4>
                                        <P>Smartest Candidate search for school</P>
                                    </div>
                                </Col>
                            </Icons>
                        </Col>
                    </Row>
                </Container>
            </Servicess>
        );
    }
}


export default Services;