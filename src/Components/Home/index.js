import React from 'react';
import HomeHeader from './Sections/HomeHeader';
import Services from './Sections/Services/index';
import Video from './Sections/Video/index';
import Teacher from './Sections/Teacher/index';
import Team from './Sections/Team/index';
import Improve from './Sections/Improve/index';
import Experience from './Sections/Experience/index';
import Partners from './Sections/Partners/index';
import Contact from './Sections/Contact/index';
function Home () {
    return (
        <div>
            <HomeHeader />
            <Services />
            <Video />
            <Teacher />
            <Team />
            <Improve />
            <Experience />
            <Partners />
            <Contact />
        </div>
    );
}

export default Home;