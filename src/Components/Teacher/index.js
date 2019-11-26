import React from 'react';
import TOrS from './Sections/TOrS';
import TeacherProfile from './Sections/Components/TeacherProfile';
function Teacher () {
    return (
        <div style={{
            'background-color': '#F7F7FA'
        }}>
            <TOrS />
            <TeacherProfile />
        </div>
    );
}
export default Teacher;