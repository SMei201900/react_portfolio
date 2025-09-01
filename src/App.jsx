import './App.css'
import Nav from './HeroSection/NavBar';
import Projects from './Projects.jsx'
import Contact from './Contact.jsx'
import Welcome from './HeroSection/Welcome'


function App() {
  return (
    <div>
      <Nav />
      <Welcome />
      <Projects />
      <Contact /> 
    </div>
  );
}

export default App