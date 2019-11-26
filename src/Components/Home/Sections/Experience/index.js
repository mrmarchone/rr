import React, {Component} from 'react';
import {Container, Row, Col} from 'reactstrap';
import Man from './man.png';
import {Box} from './style';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
class Experience extends Component {
    render () {
        return (
            <section style={{
                paddingTop: '50px',
                paddingBottom: '50px',
            }}>
                <Container>
                    <Row>
                        <Col xs={12} className="text-center">
                            <h3>Teachers & School experiance</h3>
                        </Col>
                        <Col xs={{size: 10,offset: 1}}>
                            <OwlCarousel
                                className="owl-theme"
                                loop
                                margin={10}
                                nav
                                items={2}
                                responsive={{
                                    0: {
                                        items: 1
                                    },
                                    480: {
                                        items: 1
                                    },
                                    880: {
                                        items: 2
                                    },
                                }}
                            >
                                <div className={'item'} style={{
                                    padding: '100px 0 0 0'
                                }}>
                                    <Box className={'border text-center p-5'}>
                                        <img src={Man} />
                                        <h3>Mark David</h3>
                                        <h5>Math Teacher</h5>
                                        <p>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,good.
                                        </p>
                                    </Box>
                                </div>
                            </OwlCarousel>
                        </Col>
                    </Row>
                </Container>
            </section>
        );
    }
}


export default Experience;