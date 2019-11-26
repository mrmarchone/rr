import React from 'react';
import {Title, Content, Paragraph, Icon, Header, Overlay} from './style.js';
import {Container, Row, Col} from 'reactstrap';
import Wall from './wallone.png';
import Undo from './undo.png';
import Man from './man.png';
function BlogHeader () {
    return (
        <React.Fragment>
            <Header >
                <Overlay></Overlay>
            </Header>
        <div className={'p-5'}>
            <Container>
                <Row>
                    <Col sm={12} className={'mb-4'}>
                        <Title>Teaching — It’s about Inspiration,<br />Not Information</Title>
                    </Col>
                    <Col sm={12} >
                        <div className={'d-flex justify-content-between'}>
                            <Col xs={4} sm={3}>
                                <div className={'text-muted'} style={{
                                    transform: 'translateY(200%)'
                                }}>
                                    <h6>17 July 2019</h6>
                                </div>
                            </Col>
                            <Col xs={4} sm={3} className={'text-center'}>
                                <img src={Man} style={{
                                    width: '75px',
                                    height: '75px',
                                    'border-radius': '50%'
                                }} className={'mb-3'} />
                                <h6 className={'text-muted'}>By David Ryan</h6>
                            </Col>
                        </div>
                    </Col>
                    <Col sm={12}>
                        <Content className={'text-left'}>
                            <Paragraph className='lead'>
                                <p>“Nobody cares how much you know, until they know how much you care.” Theodore Roosevelt

This is an important reminder that teaching is all about building a relationship with your students. In fact, in today’s world, when information is at our fingertips, we don’t need to go to school to learn facts and figures — a quick Google search, a glance at Wikipedia, or a question posed to Siri will usually result in answers to specific questions.
So, why go to school? What is the role of teachers?
Teaching is really about inspiration, not information. Effective teaching focuses on why and how, not what. The goal should be to spark each student’s imagination, to find a hook in their heart and mind so that they feel a need to learn the material. The rest is easy, because the student then drives his or her learning. My role as a teacher is to ask provocative questions, and to help the students make a path toward the answers. If they are motivated to find the path, they will carve it themselves. If I have to pull out a mental machete to expose the path, then I haven’t done my job.
<br />
<br />
How do you motivate students?
<br />
1) It is much easier to tap into a student’s drive if they know that you care about them personally. I have visceral memories of being a student myself. In large lecture classes in college, where the goal was to place each student on a grading curve, I routinely delivered much less than I could. I felt like a cog in a machine, because nobody cared about my learning. In contrast, in small discussion classes, I thrived. It was so meaningful to have a professor look me in the eyes and respond to my specific comments or questions. In these settings, I pushed myself to learn, nobody had to push me. It’s no surprise that I chose to continue studying in the field where I spent time in small classes with a fully engaged teacher.
<br />
<br />
2) It is also important not to make assumptions about what students already know. If you do, you lose those who don’t have the necessary foundational skills. One of my favorite professors in graduate school taught me that you should teach the same way to a 5 year old as to a 25 year old… You start at the beginning, continue building on a robust foundation, and go as far as you can with each student.
Here’s an example — Say you are teaching how airplanes stay aloft. You could start by making paper airplanes, which even a 5 year old can do. You ask students to make different models to see which flies the furthest. The older, and more mature they get, the farther you can take this exploration, leading eventually to a laboratory with a wind tunnel to measure specific parameters, including the forces, angles, and resistance.
By starting at the beginning, you’re developing a firm foundation on which each student can continue to build long into the future. Without it, they will likely have holes in their understanding that will inevitably result in their inability to apply their knowledge and skills later.
<br />
<br />
3) Find a connection to the student’s lives and make the material immediately relevant. Without this, the content is a like a puzzle piece that isn’t connected to the rest of the student’s growing picture of how the world works. The student doesn’t know why it’s relevant, has trouble learning it, and quickly discards it when the class is over.
It isn’t hard to do this — If you are teaching physics, you can tie the principles to baseball or hockey; if you are teaching history you can tie it to current events and personalities; if you are teaching chemistry, you can tie it to the food we eat; if you are teaching entrepreneurship you can tie it to local companies and founders; if you are teaching music theory, you can tie it to currently popular songs, etc. In fact, I don’t know why we don’t do this more. I believe that if a child only cares about baseball or fishing, there are ways to build an entire curriculum around each of those themes, including history, physics, writing, and art.
<br />
<br />
4) Finally, never tell students what they need to do to get an “A” in the class. If you do, they will inevitably do the minimum amount to get the grade they want. Instead I tell my students to “never miss an opportunity to be fabulous.” I promise to deliver my very best in each class, and I expect the same from them. I also tell them that I have no problem giving everyone an “A,” but that the bar is very high.
With this encouragement, I find that students deliver much more than they ever imagined. They embrace the idea of being fabulous with enthusiasm, and raise the bar repeatedly as the quarter progresses. I’ve been delighted by the stickiness of this message. It’s as though students are waiting to get this instruction. They’re hungry for permission to do their very best, to hit the ball out of the park and to shine their brightest.
<br />
<br />
It’s relatively easy to meet expectations, knowing exactly what you will get in return. But amazing things happen when you take away the cap. Like a soda bottle that’s been shaken, individuals who remove perceived limits achieve remarkable results in the classroom and beyond!
<br />
<br />
It is up to teachers to light the fuse and see what happens. As William Butler Yeats is quoted as saying, “Education is not the filling of a pail, but the lighting of a fire.”</p>
                            </Paragraph>
                        </Content>
                    </Col>
                    <Col sm={12}>
                        <div className={'icons text-muted text-right'}>
                            <Icon className={'icon'}>
                                <span>12 </span>
                                <span> <i class="fa fa-share-alt" aria-hidden="true"></i></span>
                            </Icon>
                            <Icon className={'icon'}>
                                <span>50K </span>
                                <span> <i class="fa fa-commenting-o" aria-hidden="true"></i></span>
                            </Icon>
                            <Icon className={'icon'}>
                                <span>32K </span>
                                <span className={'text-primary'}> <i class="fa fa-heart-o" aria-hidden="true"></i></span>
                            </Icon>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
        </React.Fragment>
    );
}

export default BlogHeader;