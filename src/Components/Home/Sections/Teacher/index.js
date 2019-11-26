import React, {Component} from 'react';
import {Container, Row, Col} from 'reactstrap';
import {Poly, Overlay, Content, Paragraph, Img} from './style';
import Qoma2 from './qoma2.png';
class Teacher extends Component {
    render () {
        return (
            <section className="py-5">
                <Container fluid>
                    <Row>
                        <Col sm={4} className={'pl-0'}>
                            <Img src={Qoma2} />
                            <Poly>
                                <Overlay></Overlay>
                                <Paragraph>
                                    <h3>I'm a Teacher</h3>
                                    <p>Learn More</p>
                                </Paragraph>
                            </Poly>
                        </Col>
                        <Col sm={4}>
                            <Content className={'text-center'}>
                                <article>
                                    <p>
                                    "We Are passionate 
                                    about the real 
                                    Educational Connection"
                                    </p>
                                </article>
                                <button className={'btn'}>About us</button>
                            </Content>
                        </Col>
                        <Col sm={4} className={'pr-0'}>
                            <Img right src={Qoma2} />
                            <Poly right>
                                <Overlay></Overlay>
                                <Paragraph right>
                                    <h3>We are a school</h3>
                                    <p>Learn More</p>
                                </Paragraph>
                            </Poly>
                        </Col>
                    </Row>
                </Container>
            </section>
        );
    }
}


export default Teacher;