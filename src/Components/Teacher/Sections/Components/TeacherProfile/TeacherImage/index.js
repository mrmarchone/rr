import React from 'react';
import Img from './avatar.png';
import {Div} from './style';
function TeacherImage () {
    return (
        <div>
            <Div className={'mb-3'}>
                <img src={Img} className={'img-fluid'} />
                <span></span>
            </Div>
            <div>
                <ul className={'list-unstyled text-left'}>
                    <li className={'mb-3'}><h3>Lele Snow</h3></li>
                    <li className={'text-muted mb-3'}><i class="fa fa-map-marker" aria-hidden="true"></i> London, UK</li>
                    <li className={'text-muted mb-3'}><i class="fa fa-bookmark-o" aria-hidden="true"></i> Share</li>
                </ul>
            </div>
        </div>
    );
}

export default TeacherImage;