import logo from './logo.svg';
import './App.css';

import Navigations from './components/Navigation';
import InnovationSection from './components/InnovationSection';
import WhatIsIostreak from './components/WhatIsIostreak';
import KeyAreasSection from './components/KeyAreasSection';
import SeeIostreakComponent from './components/SeeIostreakComponent';
import CustomerSupport from './components/CustomerSupport';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Navigations></Navigations> 
    <InnovationSection></InnovationSection>
    <WhatIsIostreak></WhatIsIostreak>
    <KeyAreasSection></KeyAreasSection>
    <SeeIostreakComponent></SeeIostreakComponent>
    <CustomerSupport></CustomerSupport>
    <Footer></Footer>
    </>
  );
}

export default App;
