import React from 'react';
import {Container, Row, Col, Table} from 'reactstrap';
import {Li, Ul, ParentTable} from './style';
import SchoolImage from './SchoolImage';
import SchoolAbout from './SchoolAbout';
import SchoolSkills from './SchoolSkills';
function SchoolProfile () {
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
                    <Col sm={4}>
                        <SchoolImage />
                    </Col>
                    <Col sm={8}>
                        <SchoolAbout />
                    </Col>
                    <Col sm={12} className={'my-4 text-right'}>
                        <SchoolSkills />
                    </Col>
                </Row>
                <Row>
                    <Col sm={12}>
                    <div>
                        <Ul className={'list-inline py-4 text-center d-flex justify-content-between'}>
                            <li className={'list-inline-item active'}>Active Roles</li>
                            <li className={'list-inline-item'}>Discussions</li>
                            <li className={'list-inline-item'}>Courses</li>
                            <li className={'list-inline-item'}>Gallery</li>
                            <li className={'list-inline-item'}>Workbook</li>
                        </Ul>
                    </div>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12}>
                        <ParentTable className={'p-5 mb-5 text-left'}>
                            <h5>Active roles</h5>
                            <br />
                            <Table borderless responsive>
                                <thead>
                                    <tr style={{
                                        'backgroundColor': '#F5F6FA',
                                        'color': '#A3A6B4'
                                    }}>
                                        <th>#</th>
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>Username</th>
                                    </tr>
                                </thead>
                                <tbody style={{'color': '#308EBF'}}>
                                    <tr style={{
                                        'borderBottom': '1px solid #F1F1F3'
                                    }}>
                                        <th scope="row">1</th>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                    </tr>
                                    <tr style={{
                                        'borderBottom': '1px solid #F1F1F3'
                                    }}>
                                        <th scope="row">2</th>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                    </tr>
                                    <tr style={{
                                        'borderBottom': '1px solid #F1F1F3'
                                    }}>
                                        <th scope="row">3</th>
                                        <td>Larry</td>
                                        <td>the Bird</td>
                                        <td>@twitter</td>
                                    </tr>
                                </tbody>
                                <tfoot>
                                    <tr className={'text-center text-primary'}>
                                        <td colSpan={5}>Show More</td>
                                    </tr>
                                </tfoot>
                            </Table>
                        </ParentTable>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}


export default SchoolProfile;