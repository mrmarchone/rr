import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import Icon1 from './icon1.png';
import Icon2 from './icon2.png';
import Icon3 from './icon3.png';
import Icon4 from './icon4.png';
import Icon5 from './icon5.png';
import Icon6 from './icon6.png';
import {Icons} from './style.js';
class GuidDo extends React.Component {
    render () {
        return (
            <Icons className={'my-5'}>
                <Container>
                    <h1 className={'text-center mb-5'}>What Guide do ?</h1>
                    <Row>
                        <Col sm={4} className={'text-center mb-5'}>
                            <div>
                                <img src={Icon1} className={'img-fluid'} />
                            </div>
                            <div>
                                <h5>Guide Rubric</h5>
                            </div>
                        </Col>
                        <Col sm={4} className={'text-center mb-5'}>
                            <div>
                                <img src={Icon2} className={'img-fluid'} />
                            </div>
                            <div>
                                <h5>Bespoke Platforms</h5>
                            </div>
                        </Col>
                        <Col sm={4} className={'text-center mb-5'}>
                            <div>
                                <img src={Icon3} className={'img-fluid'} />
                            </div>
                            <div>
                                <h5>Video Creation</h5>
                            </div>
                        </Col>
                        <Col sm={4} className={'text-center mb-5'}>
                            <div>
                                <img src={Icon4} className={'img-fluid'} />
                            </div>
                            <div>
                                <h5>Teaching Qualifications</h5>
                            </div>
                        </Col>
                        <Col sm={4} className={'text-center mb-5'}>
                            <div>
                                <img src={Icon5} className={'img-fluid'} />
                            </div>
                            <div>
                                <h5>Online Mentoring</h5>
                            </div>
                        </Col>
                        <Col sm={4} className={'text-center mb-5'}>
                            <div>
                                <img src={Icon6} className={'img-fluid'} />
                            </div>
                            <div>
                                <h5>Online GCSE Tuition</h5>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Icons>
        );
    }
}


export default GuidDo;