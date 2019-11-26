import React from 'react';
import Img from './avatar.png';
import {Div} from './style';
function TeacherImage () {
    return (
        <div>
            <Div className={'mb-3'}>
                <img src={Img} className={'img-fluid'} />
            </Div>
            <div>
                <ul className={'list-unstyled text-left d-flex justify-content-between'}>
                    <li className={'text-muted mb-3'}><i class="fa fa-map-marker" aria-hidden="true"></i> London, UK</li>
                    <li className={'text-muted mb-3'}><i class="fa fa-envelope-o" aria-hidden="true"></i> Messages</li>
                    <li className={'text-muted mb-3'}><i class="fa fa-bookmark-o" aria-hidden="true"></i></li>
                </ul>
            </div>
        </div>
    );
}

export default TeacherImage;