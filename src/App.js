import React from 'react';
import Navmenu from './components/common/Navmenu';
import Banner from './components/LandingPage/Banner';
import About from './components/LandingPage/About';
import Corevalue from './components/LandingPage/Corevalue';
import Expertiese from './components/LandingPage/Expertiese';
import Info from './components/LandingPage/Info';
import Footer from './components/LandingPage/Footer';


function App() {
  return (
    <div>
      <Navmenu />
      <Banner />
      <About />
      <Corevalue />
      <Expertiese />
      <Info />
      <Footer />
    </div>
  );
}

export default App;
