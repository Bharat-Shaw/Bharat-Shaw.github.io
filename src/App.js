import { Box } from '@chakra-ui/react';
import './App.css';
import Footerpage from './components/Footerpage';
import Navbar from './components/Navbarpage';
import { useSelector } from 'react-redux';
import Home from './components/Homepage';
import About from './components/About';
import Skills from './components/Skills';
import Project from './components/Project';
import Contact from './components/Contact';
import Calender from './components/Calender';
import Statistics from './components/Statistics';

function App() {

  const theme = useSelector(state => state.theme)
  return (
    <Box className="App" bg={theme? '#D7C0AE':'white'} minH={'100vh'}>
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Project/>
      <Calender/>
      <Statistics/>
      <Contact/>
      <Footerpage/>
    </Box>
  );
}

export default App;
