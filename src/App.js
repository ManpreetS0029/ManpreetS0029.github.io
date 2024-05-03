// import { CSSTransition, TransitionGroup } from 'react-transition-group';
// import { Route, Switch, Redirect, useLocation } from "react-router-dom";
import './app.css';

//components
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Education from './components/Education/Education';
// import Certifications from "./components/Certifications/Certifications";
import Projects from './components/Projects/Project';
import AboutMe from './components/About Me/AboutMe';
import { useSelector } from 'react-redux';
import Mode from './theme/mode';
import Experience from './components/Experience/Experience';
import Company from './components/Experience/Experience';

const App = () => {
  // const location = useLocation();
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
