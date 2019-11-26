import React from 'react';
import {
    Button,
    Input,
    FormGroup, Row, Col} from 'reactstrap';
import {LoginFormStyle, Span, Shadow} from './style';

class Login extends React.Component {
    sendDateToParentToCloseLogin () {
        this.props.close(false);
    }
    render () {
        return (
            <div>
                <LoginFormStyle className={'p-5'}>
                    <div className={''}>
                        <ul className={'list-unstyled d-flex justify-content-between'}>
                            <li>
                                <i class="fa fa-arrow-left" aria-hidden="true"></i>
                            </li>
                            <li>
                                <h3>Log in</h3>
                            </li>
                            <li onClick={() => this.sendDateToParentToCloseLogin()}>
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
                                <FormGroup>
                                    <Input type={'text'} placeholder={'Username'} />
                                </FormGroup>
                                <FormGroup style={{'position': 'relative'}}>
                                    <Input type={'password'}  placeholder={'Password'}/>
                                    <Span><i class="fa fa-eye" aria-hidden="true"></i></Span>
                                </FormGroup>
                                <FormGroup className={'mb-5'}>
                                    <input type={'checkbox'} className={'mr-3'}/>
                                    <label>Forget Password ?!</label>
                                </FormGroup>
                                <FormGroup style={{'position': 'relative'}}>
                                    <Button className={'w-100'}>Log in</Button>
                                    <Shadow></Shadow>
                                </FormGroup>
                                <div className={'text-center'}>
                                    <a href='#' className={'text-dark'} style={{'textDecoration': 'underline'}}>
                                        Don't have an account? Sign up.
                                    </a>
                                </div>
                            </form>
                            </Col>
                        </Row>
                    </div>
                </LoginFormStyle>
            </div>
        );
    }
}

export default Login;