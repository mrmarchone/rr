import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import {Li, Ul} from './style';
function TOrS () {
    return (
        <div className={'text-center p-5'}>
            <Container>
                <Row>
                    <Col sm={{
                        size: 6,
                        offset: 3
                    }}>
                        <div className={'buttons'}>
                            <Ul className={'list-inline'} style={{
                                'background-color': '#C5CCD6'
                            }}>
                                <Li className={'p-3'}>School</Li>
                                <Li className={'p-3 active'}>Teacher</Li>
                                <div className={'clearfix'}></div>
                            </Ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
export default TOrS;