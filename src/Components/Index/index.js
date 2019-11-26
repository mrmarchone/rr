import React from 'react';
import Home from '../Home/index';
import About from '../About/index';
import IndexFooter from '../Footer/index';
import Navbar from '../Navbar/index';
import Faq from '../Faq/index';
import SingleBlog from '../SingleBlog/index';
import Teacher from '../Teacher/index';
import School from '../School/index';
import Blogs from '../Blogs/index';
import {BrowserRouter, Route} from 'react-router-dom';
import OnlineReq from '../OnlineRequerment';
function Index () {
    return (
        <div>
            <BrowserRouter>
                <Navbar />
                <Route exact path={`/`} component={Home} />
                <Route exact path={`/about`} component={About} />
                <Route exact path={`/faq`} component={Faq} />
                <Route exact path={`/singleblog`} component={SingleBlog} />
                <Route exact path={`/teacher`} component={Teacher} />
                <Route exact path={`/school`} component={School} />
                <Route exact path={`/blogs`} component={Blogs} />
                <Route exact path={`/onlinerequerment`} component={OnlineReq} />
                <IndexFooter />
            </BrowserRouter>
        </div>
    );
}

export default Index;