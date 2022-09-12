import './App.css';
import Banner from './components/banner';
import Header from './components/header';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';
import About from './components/about';
import Methodology from './components/methodology';
import Statistics from './components/statistics';
import Roadmap from './components/roadmap';
import Footer from './components/footer';
import ScrollToTop from 'react-scroll-to-top';
import { NotificationContainer } from 'react-notifications';

function App() {

  useEffect(() => {
    AOS.init();
  },[])

  return (
    <>
      <NotificationContainer/>
      <Header/>
      <Banner/>
      <About/>
      <Methodology/>
      <Statistics/>
      <Roadmap/>
      <Footer/>
      <ScrollToTop
        smooth
        component={<i className="fas fa-rocket" style={{ transform: "rotate(-45deg)" }}/>}
      />
    </>
  );
}

export default App;
