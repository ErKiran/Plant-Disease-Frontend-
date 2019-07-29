import React from 'react';
import Banner from './Banner';
import About from './About';
import Corevalue from './Corevalue';
import Expertiese from './Expertiese';
import Info from './Info';

const Landing = () => {
    return (
        <div>
            <Banner />
            <About />
            <Corevalue />
            <Expertiese />
            <Info />
        </div>
    );
};

export default Landing;