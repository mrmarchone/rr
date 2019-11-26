import React, {Fragment, Component} from 'react';
import Img from '../TeacherImage/avatar.png';
import {Ul, Bar, Circle, Buttons} from './style';
import mp3 from './carl.mp3';
class TeacherAbout extends Component {
    render () {
        return (
            <Fragment>
                <div className={'bg-white p-3 text-left mb-4'} style={{
                    'box-shadow': '0px 0px 14px rgba(69, 91, 99, 0.16)',
                    'border-radius': '10px'
                }}>
                    <div className={'float-left'}>
                        <h2 style={{
                            color: '#454F63'
                        }}>English Teacher</h2>
                        <br />
                    </div>
                    <div className={'float-right'} style={{
                        color: '#FFD504'
                    }}>
                        <i class="fa fa-star-o" aria-hidden="true"></i>
                        <i class="fa fa-star-o" aria-hidden="true"></i> 
                        <i class="fa fa-star-o" aria-hidden="true"></i> 
                        <i class="fa fa-star-o" aria-hidden="true"></i> 
                        <i class="fa fa-star-o" aria-hidden="true"></i>
                        <span className={'text-dark'}>+63</span>
                    </div>
                    <div className={'clearfix'}></div>
                    <div style={{
                        'font-size': '12px',
                        color: '#78849E'
                    }}>
                        <p>
                        Hello, I am English Teacher with 5+ of professional experience
                        <br />
                        <br />
                        My best skills are the simple and creative ideas.
                        <br />
                        <br />
                        - I work full time 8 hours per day dedicated for only one project per time till it finish successfully. 
                        <br />
                        <br />
                        - Quick response and follow for only one project per time till it finish successfully. 
                        <br />
                        <br />
                        - Quick response and follow up with all the design projects....more
                        </p>
                    </div>
                </div>
                <div>
                    <Ul className={'list-inline py-4 text-center d-flex justify-content-between'}>
                        <li className={'list-inline-item active'}>My Conterbutions</li>
                        <li className={'list-inline-item'}>My Courses</li>
                        <li className={'list-inline-item'}>My Workbook</li>
                    </Ul>
                </div>
                <div className={'bg-white p-3 text-left mb-4'} style={{
                    'box-shadow': '0px 0px 14px rgba(69, 91, 99, 0.16)',
                    'border-radius': '10px'
                }}>
                    <div className={'float-left'}>
                        <img src={Img} className={'img-fluid'} style={{
                            width: '75px'
                        }} />
                    </div>
                    <div className={'float-left ml-3'}>
                        <h3 style={{
                            color: '#454F63'
                        }}>Lele Snow</h3>
                        <h6>1 Hour</h6>
                        <br />
                    </div>
                    <div className={'float-right'} style={{
                        color: '#FFD504'
                    }}>
                        <i class="fa fa-angle-down fa-2x" aria-hidden="true"></i>
                    </div>
                    <div className={'clearfix'}></div>
                    <div style={{
                        'font-size': '12px',
                        color: '#78849E'
                    }}>
                        <p>
                        Hello, I am English Teacher with 5+ of professional experience
                        <br />
                        <br />
                        My best skills are the simple and creative ideas.
                        <br />
                        <br />
                        - I work full time 8 hours per day dedicated for only one project per time till it finish successfully. 
                        <br />
                        <br />
                        - Quick response and follow for only one project per time till it finish successfully. 
                        <br />
                        <br />
                        - Quick response and follow up with all the design projects....more
                        </p>
                    </div>
                </div>
                <div className={'bg-white text-left mb-4'} style={{
                    'box-shadow': '0px 0px 14px rgba(69, 91, 99, 0.16)',
                    'border-radius': '10px'
                }}>
                    <div className={'p-3'}>
                        <div className={'float-left'}>
                            <img src={Img} className={'img-fluid'} style={{
                                width: '75px'
                            }} />
                        </div>
                        <div className={'float-left ml-3'}>
                            <h3 style={{
                                color: '#454F63'
                            }}>Lele Snow</h3>
                            <h6>1 Hour</h6>
                            <br />
                        </div>
                    </div>
                    <div className={'clearfix'}></div>
                    <div style={{
                        'font-size': '12px',
                        color: '#78849E'
                    }}>
                        <div className={'audio'}>
                            <Bar>
                                <Circle id={'circle'} ref={'circle'}></Circle>
                            </Bar>
                            <div className={'controls p-5 text-dark d-flex justify-content-between align-items-center'}>
                                <div className={'repeat'}>
                                    <i class="fa fa-retweet fa-2x" aria-hidden="true"></i>
                                </div>
                                <Buttons>
                                    <button><i class="fa fa-step-backward fa-2x" aria-hidden="true"></i></button>
                                    <button><i class="fa fa-pause fa-3x" aria-hidden="true"></i></button>
                                    <button><i class="fa fa-step-forward fa-2x" aria-hidden="true"></i></button>
                                </Buttons>
                                <div className={'repeat'}>
                                    <i class="fa fa-volume-down fa-2x" aria-hidden="true"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default TeacherAbout;