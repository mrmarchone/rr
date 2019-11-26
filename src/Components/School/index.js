import React from 'react';
import TOrS from './Sections/TOrS';
import SchoolProfile from './Sections/Components/SchoolProfile';
function School () {
    return (
        <div style={{
            'background-color': '#F7F7FA'
        }}>
            <TOrS />
            <SchoolProfile />
        </div>
    );
}
export default School;