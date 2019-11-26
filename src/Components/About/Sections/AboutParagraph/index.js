import React from 'react';
import {Content, Paragraph} from './style.js';
import {Container, Row, Col} from 'reactstrap';
function AboutParagraph () {
    return (
        <div>
            <Container fluid>
                <Row>
                    <Col sm={{size: 8,offset: 2}}>
                        <Content className={'text-light'}>
                            <Paragraph>
                                <h4>What is Guide education ?</h4>
                                <br />
                                <p>
                                Guide Education is a collective of highly experienced teachers, governors, technologists and trainers committed to supporting a range of institutions to be the best that they can be. Guide staff are firmly committed to life learning for themselves and others and have created products to enable learners and trainers from all walks of life to take on the people they need to best support others in their learning journey.
                                </p>
                            </Paragraph>
                            <Paragraph>
                                <h4>Foundation</h4>
                                <br />
                                <p>
                                Guide was Founded in 2013 by Leon Hady, the former head teacher of an Ofsted ‘Outstanding’ school to provide wider  support services for schools, students and businesses. In 2016, noting that the learner journey needed to be of high quality, flexible and as need-focused as possible, Leon and the team developed a unique online learning platform to support staff and students in a variety of ways.
<br />
<br />
<br />

In 2017 they were helping over 100,000 students worldwide to prepare for exams and in 2018 began supporting 50 teachers and trainers progress towards professional qualifications. Guide’s growth plan is to play a key role in the education of over 1,000,000 students and 10,000 teachers by 2020.
                                </p>
                            </Paragraph>
                        </Content>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default AboutParagraph;