import React from 'react';
import {Header, Title, Content, Paragraph, Overlay} from './style.js';
import {Container, Row, Col} from 'reactstrap';
function BlogsHeader () {
    return (
        <Header>
            <Overlay />
            <Container fluid>
                <Row>
                    <Col sm={12}>
                        <Content className={'text-center'}>
                            <Title className="text-light">Blogs</Title>
                            <Paragraph className='text-light lead'>
                                <p>
                                    Sharing ideas, stories & insights
                                </p>
                            </Paragraph>
                        </Content>
                    </Col>
                </Row>
            </Container>
        </Header>
    );
}

export default BlogsHeader;