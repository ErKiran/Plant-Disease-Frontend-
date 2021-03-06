import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Navmenu from './components/common/Navmenu';

import Footer from './components/common/Footer';
import Landing from './components/LandingPage/Landing';
import Aboutus from './components/Aboutus/Aboutus';
import Contact from './components/Contact/Contact';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import ConnectDrive from './components/DiseaseDetect/ConnectDrive';
import SimpleImage from './components/DiseaseDetect/SimpleImage';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Navmenu />
        <Route exact path="/" component={Landing} />
        <Route exact path="/about_us" component={Aboutus} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/connect_drive" component={ConnectDrive} />
        <Route exact path="/detect" component={SimpleImage} />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
