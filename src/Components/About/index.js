import React from 'react';
import AboutHeader from './Sections/AboutHeader';
import AboutParagraph from './Sections/AboutParagraph';
import AboutVideo from './Sections/AboutVideo';
import AboutBoard from './Sections/AboutBoard';
function About () {
    return (
        <div>
            <AboutHeader />
            <AboutParagraph />
            <AboutVideo />
            <AboutBoard />
        </div>
    );
}
export default About;