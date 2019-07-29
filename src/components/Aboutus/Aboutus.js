import React from 'react';


import SingleBanner from '../common/SingleBanner';
import Promo from './Promo';
import Main from './Main'
import Stats from './Stats';
import Team from './Team'

const Aboutus = () => {
    return (
        <div>
            <SingleBanner />
            <Main />
            <Stats />
            <Promo />
            <Team />
        </div>
    );
};

export default Aboutus;