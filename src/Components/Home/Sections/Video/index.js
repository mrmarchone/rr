import React, {Component} from 'react';
import {Container, Row, Col} from 'reactstrap';
import {Videoo, Content, Qomas, VideoSection} from './style';
import VideoSrc from './video.mp4';
import Qoma from './qoma.png';
import Qoma2 from './qoma2.png';
class Video extends Component {
    render () {
        return (
            <VideoSection>
                <Container fluid>
                    <Row>
                        <Col sm={6}>
                            <Qomas>
                                <img src={Qoma2} />
                                <img src={Qoma} style={{
                                    marginLeft: '-40px',
                                    marginTop: '-40px',
                                }} />
                            </Qomas>
                            <Content className={'pl-5'}>
                                <h1 className="mb-4">The Recruitment hub</h1>
                                <p className={'lead'}>Lorem ipsum dolor sit amet, vim ex modus volumus. Ceteros propriae scaevola an sit. Eu justo fugit expetenda eum, vix ex iusto labore eirmod. Per cu repudiare hendrerit, quo id case delectus, an facer zril singulis eos. Aeterno ocurreret mediocritatem et vix. Vim nobis oportere ut, eos te vivendo explicari inciderint.</p>
                            </Content>
                        </Col>
                        <Col sm={6}>
                            <div className={'images'}>
                                <Videoo controls muted>
                                    <source src={VideoSrc} />
                                </Videoo>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </VideoSection>
        );
    }
}

export default Video;