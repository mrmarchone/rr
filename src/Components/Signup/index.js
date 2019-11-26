import React from 'react';
import {
    Button,
    Input,
    FormGroup, Row, Col} from 'reactstrap';
import {SignupFormStyle, Span, Shadow} from './style';

class Signup extends React.Component {
    sendDateToParentToCloseSignup () {
        this.props.close(false);
    }
    render () {
        return (
            <div>
                <SignupFormStyle className={'p-5'}>
                    <div className={''}>
                        <ul className={'list-unstyled d-flex justify-content-between'}>
                            <li>
                                <i class="fa fa-arrow-left" aria-hidden="true"></i>
                            </li>
                            <li className={'text-center'}>
                                <h3>Sign Up</h3>
                                <p>Please complete to create your account.</p>
                            </li>
                            <li onClick={() => this.sendDateToParentToCloseSignup()}>
                                <i class="fa fa-times" aria-hidden="true"></i>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <Row>
                            <Col sm={{
                                size: 6,
                                offset: 3
                            }}>
                                <form>
                                <FormGroup className={'d-sm-flex justify-content-between'}>
                                    <Input type={'text'} style={{'width': '45%'}} placeholder={'First Name'} />
                                    <Input type={'text'} style={{'width': '45%'}} placeholder={'Last Name'} />
                                </FormGroup>
                                <FormGroup>
                                    <Input type={'email'}  placeholder={'Email'}/>
                                </FormGroup>
                                <FormGroup>
                                    <Input type={'email'}  placeholder={'Username'}/>
                                </FormGroup>
                                <FormGroup style={{'position': 'relative'}}>
                                    <Input type={'password'}  placeholder={'Password'}/>
                                    <Span><i class="fa fa-eye" aria-hidden="true"></i></Span>
                                </FormGroup>
                                <FormGroup style={{'position': 'relative'}}>
                                    <Input type={'password'}  placeholder={'Confirm Password'}/>
                                    <Span><i class="fa fa-eye" aria-hidden="true"></i></Span>
                                </FormGroup>
                                <FormGroup style={{'position': 'relative'}}>
                                    <Button className={'w-100'}>Sign Up</Button>
                                    <Shadow></Shadow>
                                </FormGroup>
                                <div className={'text-center'}>
                                    <a href='#' className={'text-dark'} style={{'textDecoration': 'underline'}}>
                                        Already have an account? Sign in.
                                    </a>
                                </div>
                            </form>
                            </Col>
                        </Row>
                    </div>
                </SignupFormStyle>
            </div>
        );
    }
}

export default Signup;