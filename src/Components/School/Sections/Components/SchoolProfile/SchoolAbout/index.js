import React, {Fragment, Component} from 'react';
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
                        }}>Canyon High School</h2>
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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum……..More
                        </p>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default TeacherAbout;