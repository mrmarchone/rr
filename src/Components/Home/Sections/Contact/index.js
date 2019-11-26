import React, {Component} from 'react';
import {Container, Row, Col, Form, FormGroup, Input, Button} from 'reactstrap';
import {ContactSection, Box, Span} from './style';
class Contact extends Component {
    render () {
        return (
            <ContactSection className={'p-5'}>
                <Container>
                    <Row>
                        <Col sm={{
                            size: 6,
                            offset: 3
                        }} className={'text-center'}>
                            <h3>Say Hello To Us!</h3>
                            <Span></Span>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore. et dolore magna aliqua..</p>
                        </Col>
                        <Col sm={{
                            size: 10,
                            offset: 1
                        }}>
                            <Box className={'d-sm-flex Box'}>
                                <Col sm={4}>
                                    <div className={'parent left p-4'}>
                                        <div className={'location mb-3'}>
                                            <h5><i className={'fa fa-facebook'}></i> location: </h5>
                                            <p>Jurain,Dhaka Bangladesh</p>
                                        </div>
                                        <div className={'location mb-3'}>
                                            <h5><i className={'fa fa-facebook'}></i> location: </h5>
                                            <p>Jurain,Dhaka Bangladesh</p>
                                        </div>
                                        <div className={'location mb-3'}>
                                            <h5><i className={'fa fa-facebook'}></i> location: </h5>
                                            <p>Jurain,Dhaka Bangladesh</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col sm={8}>
                                    <div className={'right'}>
                                        <Form>
                                            <FormGroup>
                                                <Input type={'text'} placeholder={'Name'} />
                                            </FormGroup>
                                            <FormGroup>
                                                <Input type={'email'} placeholder={'Email'} />
                                            </FormGroup>
                                            <FormGroup>
                                                <Input type={'textarea'} placeholder={'Message'} />
                                            </FormGroup>
                                            <FormGroup>
                                                <Button>Send Message</Button>
                                            </FormGroup>
                                        </Form>
                                    </div>
                                </Col>
                            </Box>
                        </Col>
                    </Row>
                </Container>
            </ContactSection>
        );
    }
}


export default Contact;