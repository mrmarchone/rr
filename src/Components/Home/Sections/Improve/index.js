import React , {Component} from 'react';
import {Container, Row, Col} from 'reactstrap';
import Wall from './no.png';
import Icon1 from './icon1.png';
import Icon2 from './icon2.png';
import Icon3 from './icon3.png';
import Icon4 from './icon4.png';
import Qoma from './qoma.png';
import Qoma2 from './qoma2.png';
import {Img, ImproveSection, Content, Article} from './style';
class Improve extends Component {
    render () {
        return (
            <ImproveSection style={{
                overflow: 'hidden'
            }}>
                <Container fluid>
                    <Row>
                        <Col sm={6} className={'pl-0'}>
                            <Img src={Wall} width={'100%'} height={'100%'} />
                            <div className={'qomas'} style={{
                                position: 'absolute',
                                top: '0',
                                right: '0',
                            }}>
                                <img src={Qoma} style={{
                                    position: 'absolute',
                                    bottom: '-47px',
                                    right: '-55px',
                                }}/>
                                <img src={Qoma2} />
                            </div>
                        </Col>
                        <Col sm={6}>
                            <Content className={'p-5'}>
                                <h3 className={'text-light'}>Enhance your teaching career</h3>
                            </Content>
                            <div className={'parent'}>
                                <div className={'d-flex mb-3'}>
                                    <Col xs={2}>
                                        <img src={Icon1} className={'img-fluid'} />
                                    </Col>
                                    <Col xs={10} className={'pl-0 text-light'}>
                                        <h4>Digital learning</h4>
                                        <Article>
                                            <p>A place to house, streamline and enhance all types of digital learning Utterly flexible set up.</p>
                                        </Article>
                                    </Col>
                                </div>
                                <div className={'d-flex mb-3'}>
                                    <Col xs={2}>
                                        <img src={Icon2} className={'img-fluid'} />
                                    </Col>
                                    <Col xs={10} className={'pl-0 text-light'}>
                                        <h4>Train teachers</h4>
                                        <Article>
                                            <p>A place to house, streamline and enhance all types of digital learning Utterly flexible set up.</p>
                                        </Article>
                                    </Col>
                                </div>
                                <div className={'d-flex mb-3'}>
                                    <Col xs={2}>
                                        <img src={Icon3} className={'img-fluid'} />
                                    </Col>
                                    <Col xs={10} className={'pl-0 text-light'}>
                                        <h4>Create & organize your training</h4>
                                        <Article>
                                            <p>A place to house, streamline and enhance all types of digital learning Utterly flexible set up.</p>
                                        </Article>
                                    </Col>
                                </div>
                                <div className={'d-flex'}>
                                    <Col xs={2}>
                                        <img src={Icon4} className={'img-fluid'} />
                                    </Col>
                                    <Col xs={10} className={'pl-0 text-light'}>
                                        <h4>Improve learning system</h4>
                                        <Article>
                                            <p>A place to house, streamline and enhance all types of digital learning Utterly flexible set up.</p>
                                        </Article>
                                    </Col>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </ImproveSection>
        );
    }
}


export default Improve;