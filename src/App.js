import './App.css';
import Banner from './sections/Banner';
import Header from './sections/Header';
import Footer from './sections/Footer';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';

function App() {
  return (
    <div>
      <Header />
      <Banner />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
