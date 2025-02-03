import './App.css';
import Diet from './components/Diet';
import Footer from './components/Footer';
import FooterF from './components/FooterF';
import FooterUpper from './components/FooterUpper';
import Header from './components/Header';
import OurGallery from './components/OurGallery';
import Products from './components/Products';
import Section from './components/Section';
import SectionBody from './components/SectionBody';
import SectionSec from './components/SectionSec';

function App() {
  return (
    <div className='App'>
      <Header />
      <Section />
      <SectionBody />
      <OurGallery />
      <SectionSec />
      <Diet />
      <Products />
      <FooterUpper />
      <FooterF />
      <Footer />
    </div>
  );
}

export default App;
