import React, {Component} from 'react';
import {Container, Row, Col} from 'reactstrap';
import {Videoo, Content, VideoSection} from './style';
import VideoSrc from './video.mp4';
class AboutVideo extends Component {
    render () {
        return (
            <VideoSection>
                <Container fluid>
                    <Row>
                        <Col sm={6}>
                            <Content className={'pl-5'}>
                                <h1 className="mb-4">Guide Education</h1>
                                <p className={'lead'}>Supported by a board of vast experience, Guide has the vision, technology, educational and business expertise as well as deeply rooted values to support institutions of all types develop their staff, students and trainees in a deeply meaningful and fulfilling way.</p>
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

export default AboutVideo;