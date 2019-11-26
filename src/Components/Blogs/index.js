import React from 'react';
import BlogsHeader from './Sections/BlogsHeader';
import Search from './Sections/Search';
import BlogsList from './Sections/BlogsList';
import { Pagination, PaginationItem, PaginationLink, Col, Row, Container } from 'reactstrap';
function Blogs () {
    return (
        <div>
            <BlogsHeader />
            <Search />
            <BlogsList />
            <section>
                <Container>
                    <Row>
                        <Col sm={{size: 4,offset: 4}}>
                        <Pagination aria-label="Page navigation example">
                            <PaginationItem>
                                <PaginationLink first href="#" style={{'backgroundColor': 'white', 'color': '#117D97'}} />
                                </PaginationItem>
                                <PaginationItem>
                                <PaginationLink previous href="#"  style={{'backgroundColor': 'white', 'color': '#117D97'}} />
                                </PaginationItem>
                                <PaginationItem>
                                <PaginationLink href="#"  style={{'backgroundColor': '#117D97', 'color': 'white'}}>
                                    1
                                </PaginationLink>
                                </PaginationItem>
                                <PaginationItem>
                                <PaginationLink href="#"  style={{'backgroundColor': 'white', 'color': '#117D97'}}>
                                    2
                                </PaginationLink>
                                </PaginationItem>
                                <PaginationItem>
                                <PaginationLink href="#"  style={{'backgroundColor': 'white', 'color': '#117D97'}}>
                                    3
                                </PaginationLink>
                                </PaginationItem>
                                <PaginationItem>
                                <PaginationLink href="#"  style={{'backgroundColor': 'white', 'color': '#117D97'}}>
                                    4
                                </PaginationLink>
                                </PaginationItem>
                                <PaginationItem>
                                <PaginationLink href="#"  style={{'backgroundColor': 'white', 'color': '#117D97'}}>
                                    5
                                </PaginationLink>
                                </PaginationItem>
                                <PaginationItem>
                                <PaginationLink next href="#"  style={{'backgroundColor': 'white', 'color': '#117D97'}} />
                                </PaginationItem>
                                <PaginationItem>
                                <PaginationLink last href="#"  style={{'backgroundColor': 'white', 'color': '#117D97'}} />
                                </PaginationItem>
                            </Pagination>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    );
}


export default Blogs;