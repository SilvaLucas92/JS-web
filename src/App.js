import About from './components/AboutMe/About';
import AboutMe from './components/AboutMe/AboutMe';
import Contacto from './components/Contacto/Contacto';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Servicios from './components/Servicios/Servicios';
import FrequentQuestions from './components/FrequentQuestions/FrequentQuestions'
function App() {
  return (
    <>
      <Header />,
      <Hero />
      <About />
      {/* <AboutMe /> */}
      <Servicios />
      <FrequentQuestions />
      <Contacto />
      <Footer />
    </>
  );
}

export default App;
