import './app.css';

//components
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Education from './components/Education/Education';
import Projects from './components/Projects/Project';
import AboutMe from './components/About Me/AboutMe';
import { useSelector } from 'react-redux';
import Mode from './theme/mode';
import Company from './components/Experience/Experience';

const App = () => {
  const theme = useSelector((state) => state.theme);

  return (
    <div className="App" style={theme}>
      <Navbar />
      <Home />
      <Company />
      <Projects />
      <Education />
      <AboutMe />
      <Footer />
      <Mode />
    </div>
  );
};

export default App;
