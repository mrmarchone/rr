import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import {Li} from './style';
import TeacherImage from './TeacherImage';
import TeacherAbout from './TeacherAbout';
import TeacherSkills from './TeacherSkills';
function TeacherProfile () {
    return (
        <div className={'text-center'}>
            <Container>
                <Row>
                    <Col sm={{
                        size: 8,
                        offset: 2
                    }}>
                        <ul className={'list-inline'}>
                            <Li className={'list-inline-item active'}>Home</Li>
                            <Li className={'list-inline-item'}>Position Search</Li>
                            <Li className={'list-inline-item'}>Contributors</Li>
                            <Li className={'list-inline-item'}>Courses</Li>
                            <Li className={'list-inline-item'}>Workbook</Li>
                        </ul>
                    </Col>
                </Row>
                <Row className={'mt-5'}>
                    <Col sm={2}>
                        <TeacherImage />
                    </Col>
                    <Col sm={7}>
                        <TeacherAbout />
                    </Col>
                    <Col sm={3}>
                        <TeacherSkills />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}


export default TeacherProfile;