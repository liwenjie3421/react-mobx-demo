import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import LeftNav from './leftNav';
import News from './news';
import Activities from './activities';

const route = () => ( 
    <Router>
        <div>
            <Route path="/" component={LeftNav} />
            <Route exact path="/news" component={News} />
            <Route exact path="/activities" component={Activities} />
        </div> 
    </Router>
);

export default route;