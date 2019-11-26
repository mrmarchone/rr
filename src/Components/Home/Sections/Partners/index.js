import React, {Component} from 'react';
import {Container, Row, Col} from 'reactstrap';
import Logos from './logos.png';
import {Part} from './style';
class Partners extends Component {
    render () {
        return(
            <Part className={'p-5'}>
                <Container>
                    <Row>
                        <Col xs={12} className={'text-center'}>
                            <h3>Our Partners</h3>
                            <p>We work with Education Changemakers to provide<br />
innovative and leading pedagogy across a global cohort of students and teachers.</p>
                        </Col>
                        <Col sm={12} className={'text-center'}>
                            <img src={Logos} className={'img-fluid'} />
                            <button className={'btn my-4'}>Learn More</button>
                        </Col>
                    </Row>
                </Container>
            </Part>
        );
    }
}


export default Partners;