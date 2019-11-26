import React , {Component} from 'react';
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Button,
    InputGroup,
    InputGroupAddon,
    Input,
    InputGroupText} from 'reactstrap';
import Logo from './logo.png';
import Bars from './subject.png';
import { withRouter } from 'react-router-dom';
import {LoginForm} from './style';
import Login from '../Login';
import Signup from '../Signup';
import Search from './search';
import Sidebar from "../Sidebar";
class NavBar extends Component {
    openLogin () {
        this.setState({
            loginToggle: true
        })
    };
    openSignup () {
        this.setState({
            signupToggle: true
        })
    };
    closeLogin = (child) => {
        this.setState({
            loginToggle: child
        })
    };
    closeSignup = (child) => {
        this.setState({
            signupToggle: child
        })
    };
    openSearch () {
        this.setState({
            search: true
        });
    }
    openSide () {
        this.setState({
            openSidebar: true
        });
    }
    closeSearch = (child) => {
        this.setState({
            search: child
        });
    };
    closeSide = (child) => {
        this.setState({
            openSidebar: child
        });
    };
    state = {
        loginToggle: false,
        signupToggle: false,
        search: false,
        openSidebar: false
    };

    render () {
        const url = this.props.location.pathname;
        return (
            <div>
                <Sidebar  search={this.state.openSidebar} close={this.closeSide}/>
                <Search search={this.state.search} close={this.closeSearch}/>
                <Navbar dark expand="md" style={{
                    'background-color': `${url === '/singleblog' || url === '/teacher' || url === '/school' ? '#013C75'  : '' }`
                }} className={`${url === '/singleblog' || url === '/teacher' || url === '/school' ? ''  : 'fixed-top'}`}>
                    <NavbarBrand href="/"><img src={Logo} className='img-fluid' /></NavbarBrand>
                    <Nav className="ml-auto" navbar>
                        <NavItem  className={'d-none d-md-block'}>
                            <NavLink>
                                <InputGroup>
                                    <Input style={{
                                        backgroundColor: 'transparent',
                                        borderColor: 'white',
                                        borderRightColor: 'transparent',
                                        borderTopLeftRadius: '30px',
                                        borderBottomLeftRadius: '30px',
                                        }} onClick={() => this.openSearch()}/>
                                    <InputGroupAddon addonType="append">
                                        <InputGroupText className='iconSearch'
                                                        style={{
                                                            backgroundColor: 'transparent',
                                                            borderColor: 'white',
                                                            borderLeftColor: 'transparent',
                                                            color: 'white',
                                                            borderTopRightRadius: '30px',
                                                            borderBottomRightRadius: '30px',
                                                        }}>
                                    <i className="fa fa-search"></i></InputGroupText>
                                    </InputGroupAddon>
                                </InputGroup>
                            </NavLink>
                        </NavItem>
                        <NavItem  className={'d-none d-md-block'}>
                            <NavLink>
                                <Button style={{
                                    'width': '120px',
                                    'backgroundColor': 'transparent',
                                    'borderColor': 'white',
                                    'borderRadius': '30px'
                                }} onClick={() => this.openLogin()}>Log in</Button>
                            </NavLink>
                        </NavItem>
                        <NavItem  className={'d-none d-md-block'}>
                            <NavLink>
                                <Button style={{
                                    'width': '120px',
                                    'backgroundColor': '#308EBF',
                                    'borderColor': 'transparent',
                                    'borderRadius': '30px'
                                }} onClick={() => this.openSignup()}>Sign Up</Button>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>
                                <img src={Bars} style={{
                                    marginTop: '-6px'
                                }} onClick={() => this.openSide()} />
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Navbar>
                <LoginForm show={this.state.loginToggle}>
                    <Login close={this.closeLogin} />
                </LoginForm>
                <LoginForm show={this.state.signupToggle}>
                    <Signup  close={this.closeSignup}  />
                </LoginForm>
            </div>
        );
    }
}

export default withRouter(NavBar);