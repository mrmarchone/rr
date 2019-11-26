import React from 'react';
import {Header, Overlay} from './style.js';
function FaqHeader () {
    return (
        <Header style={{
            'height': '50vh'
        }}>
            <Overlay />
        </Header>
    );
}

export default FaqHeader;