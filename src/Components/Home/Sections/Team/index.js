import React, {Component} from 'react';
import {Container, Row, Col} from 'reactstrap';
import One from './one.png';
import Two from './two.png';
import Three from './three.png';
import Qoma from './qoma.png';
import Qoma2 from './qoma2.png';
import {Img, Paragraph} from './style';
class Team extends Component {
    render () {
        return (
            <section className={'teamSection p-5 text-center'}>
                <Container>
                    <Row>
                        <Col sm={{size: 8,offset: 2}}>
                            <div className={'content'}>
                                <Img src={Qoma} qoma left />
                                    <h1>Build your online account</h1>
                                <Img src={Qoma2} qoma right />
                            </div>
                            <div className={'d-sm-flex mt-4'}>
                                <Col sm={4}>
                                    <Img src={One} />
                                </Col>
                                <Col sm={4}>
                                    <Img src={Two} />
                                </Col>
                                <Col sm={4}>
                                    <Img src={Three} />
                                </Col>
                            </div>
                            <Paragraph>
                                <p>
                                Lorem ipsum dolor sit amet, vim ex modus volumus. Ceteros propriae scaevola an sit. Eu justo fugit expetenda eum, vix ex iusto labore eirmod. Per cu repudiare hendrerit, quo id case delectus, an facer zril singulis eos. Aeterno ocurreret mediocritatem et vix. Vim nobis oportere ut, eos te vivendo explicari inciderint.
                                </p>
                                <button className={'btn'}>Learn more</button>
                            </Paragraph>
                        </Col>
                    </Row>
                </Container>
            </section>
        ); 
    }
}


export default Team;