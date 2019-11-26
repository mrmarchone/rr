import React from 'react';
import {Parent, Child, Circle, Ul, Plus} from './style';
function TeacherSkills () {
    return (
        <div>
            <div className={'bg-white w-100 p-3 text-white'} style={{
                'box-shadow': '0px 0px 14px rgba(69, 91, 99, 0.16)',
                'border-radius': '10px'
            }}>
                <Parent>
                    <Child style={{
                        width: '60%',
                        'background-color': '#5773FF'
                    }}>234</Child>
                </Parent>
                <Parent>
                    <Child style={{
                        width: '80%',
                        'background-color': '#3497FD'
                    }}>348</Child>
                </Parent>
                <Parent>
                    <Child style={{
                        width: '50%',
                        'background-color': '#3ACCE1'
                    }}>15%</Child>
                </Parent>
                <hr />
                <ul className={'list-inline'} style={{
                    color: '#78849E'
                }}>
                    <li className={'list-inline-item'}><Circle style={{
                        'background-color': '#5773FF'
                    }}></Circle> Courses</li>
                    <li className={'list-inline-item'}><Circle style={{
                        'background-color': '#3497FD'
                    }}></Circle> Workplace</li>
                    <li className={'list-inline-item'}><Circle style={{
                        'background-color': '#3ACCE1'
                    }}></Circle> Avalabilty</li>
                </ul>
            </div>
            <br />
            <div>
                <Ul className={'list-inline p-3 text-center d-flex justify-content-between'}>
                    <li className={'list-inline-item'}>125<br />Followers</li>
                    <li className={'list-inline-item'}>125<br />Followers</li>
                    <li className={'list-inline-item'}>125<br />Followers</li>
                </Ul>
            </div>
            <br />
            <div className={'text-left'}>
                <Plus>
                    <i class="fa fa-plus" aria-hidden="true"></i>
                </Plus>
            </div>
        </div>
    );
}

export default TeacherSkills;