import React, {Component} from 'react';
import {ASIDE, SPAN, LI} from './style';
import {Container, Row, Col} from "reactstrap";
class Sidebar extends Component {
    close () {
        this.props.close(false);
    }
    render () {
        return (
            <ASIDE side={this.props.search}>
                <Container>
                    <Row className={'mb-5 mt-2'}>
                        <Col className={'text-right'}>
                            <i className={'fa fa-times fa-2x'} onClick={() =>this.close()}></i>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <ul className={'list-unstyled'}>
                                <LI><SPAN>01.</SPAN> Home</LI>
                                <LI><SPAN>02.</SPAN> About</LI>
                                <LI><SPAN>03.</SPAN> Services</LI>
                                <LI><SPAN>04.</SPAN> Gallery</LI>
                                <LI><SPAN>05.</SPAN> Contact us</LI>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </ASIDE>
        );
    }
}
export default Sidebar;