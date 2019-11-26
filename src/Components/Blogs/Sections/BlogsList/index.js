import React from 'react';
import Img from './img.png';
import {Container, Row, Col} from 'reactstrap';
import {Blog} from './style';
class BlogsList extends React.Component {
    Data () {
        const d = [];
        for (var i = 0;i < 10;i++) {
            d.push(
                <React.Fragment key={i}>
            <Row>
                <Col sm={12}>
                    <Blog className={'d-md-flex p-3'}>
                        <Col md={3}>
                            <img src={Img} className={'img-fluid'} />
                        </Col>
                        <Col md={9}>
                            <div>
                                <h3>Teaching — It’s about Inspiration, Not Information</h3>
                                <p style={{
                                    'fontSize': '12px',
                                    'lineHeight': '30px'
                                }}>This is an important reminder that teaching is all about building a relationship with your students. In fact, in today’s world, when information is at our fingertips, we don’t need to go to school to learn facts and figures — a quick Google search, a glance at Wikipedia, or a question posed to Siri will usually result in answers to specific questions.
                                So, why go to school? What is the role of teachers? ...</p>
                                <div className={'d-sm-flex justify-content-between'} style={{'color': '#BBBCCD'}}>
                                    <Col sm={2}>
                                        <i class="fa fa-share fa-2x" aria-hidden="true"></i>
                                    </Col>
                                    <Col sm={4} className={'text-right'}>
                                        <ul className={'list-inline'}>
                                            <li className={'list-inline-item mr-3'}>
                                                <span style={{'verticalAlign': 'super'}} className={'mr-2'}>265</span>

                                                <i class="fa fa-comment-o fa-2x" aria-hidden="true"></i>
                                            </li>
                                            <li className={'list-inline-item mr-3'}>
                                                <span style={{'verticalAlign': 'super'}} className={'mr-2'}>265</span>
                                                <i class="fa fa-heart-o fa-2x" aria-hidden="true" style={{
                                                    'color': '#308EBF'
                                                }}></i>
                                            </li>
                                        </ul>
                                    </Col>
                                </div>
                            </div>
                        </Col>
                    </Blog>
                </Col>
            </Row>
            <hr />
        </React.Fragment>
            );
        }
        return d;
    }
    render () {
        return (
            <div>
                <Container>
                    {this.Data()}
                </Container>
            </div>
        );
    }
}

export default BlogsList;