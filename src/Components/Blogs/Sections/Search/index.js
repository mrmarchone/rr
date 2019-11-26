import React from 'react';
import {Container, Row, Col, Input, InputGroup, InputGroupAddon, InputGroupText} from 'reactstrap';
function Search () {
    return (
        <div className={'p-4'}>
            <Container>
                <Row className={'justify-content-between'}>
                    <Col sm={4}>
                        <div style={{
                            color: '#828282'
                        }}>
                            <i class="fa fa-th fa-2x" aria-hidden="true"></i> <span style={{
                                'verticalAlign': 'super'
                            }}>Categories</span>
                        </div>
                    </Col>
                    <Col sm={3}>
                    <InputGroup>
                        <Input style={{
                            backgroundColor: 'transparent',
                            borderColor: '#828282',
                            borderRightColor: 'transparent',
                            borderTopLeftRadius: '30px',
                            borderBottomLeftRadius: '30px',
                            }}
                            placeholder={'Search tags'}/>
                        <InputGroupAddon addonType="append">
                            <InputGroupText className='iconSearch'
                                            style={{
                                                backgroundColor: 'transparent',
                                                borderColor: '#828282',
                                                borderLeftColor: 'transparent',
                                                color: '#828282',
                                                borderTopRightRadius: '30px',
                                                borderBottomRightRadius: '30px',
                                            }}>
                        <i className="fa fa-search"></i></InputGroupText>
                        </InputGroupAddon>
                    </InputGroup>
                    </Col>
                </Row>
                <hr />
            </Container>
        </div>
    );
}

export default Search;