import React from 'react';
import {Container, Row, Col, Button} from 'reactstrap';
import {Footer} from './style';
import Logo from './logo.png';
function IndexFooter () {
    return (
        <Footer className={'p-5'}>
            <Container>
                <Row>
                    <Col sm={3}>
                        <ul className={'list-unstyled'}>
                            <li><h4>ABOUT US</h4></li>
                            <li>Blog</li>
                            <li>Press</li>
                            <li>Jobs</li>
                            <li>
                                <img src={Logo} />
                            </li>
                        </ul>
                    </Col>
                    <Col sm={3}>
                        <ul className={'list-unstyled'}>
                            <li><h4>LEARN MORE</h4></li>
                            <li>Support</li>
                            <li>Terms of services</li>
                            <li>Privacy Policy</li>
                            <li>Imprint</li>
                            <li>Dispute</li>
                        </ul>
                    </Col>
                    <Col sm={3}>
                        <ul className={'list-unstyled'}>
                            <li><h4>SERVICES</h4></li>
                            <li>Higher Education</li>
                            <li>Professional Development</li>
                            <li>Buy a Gift Card</li>
                            <li>Springer Nature and MOOCs</li>
                            <li>MOOC & Book</li>
                        </ul>
                    </Col>
                    <Col sm={3}>
                        <ul className={'list-inline'}>
                            <li><h4>FOLLOW US</h4></li>
                            <br />
                            <li className={'list-inline-item'}><i className={'fa fa-twitter fa-2x'}></i></li>
                            <li className={'list-inline-item'}><i className={'fa fa-instagram fa-2x'}></i></li>
                            <li className={'list-inline-item'}><i className={'fa fa-facebook fa-2x'}></i></li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </Footer>
    );
}

export default IndexFooter;