import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Navmenu from './components/common/Navmenu';

import Footer from './components/common/Footer';
import Landing from './components/LandingPage/Landing';
import Aboutus from './components/Aboutus/Aboutus';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Navmenu />
        <Route exact path="/" component={Landing} />
        <Route exact path="/about_us" component={Aboutus} />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
