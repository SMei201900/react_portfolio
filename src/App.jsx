import './App.css'
import Nav from './Pages/HeroSection/NavBar.jsx';
import Projects from './Pages/Projects.jsx'
import Contact from './Pages/Contact.jsx'
import Welcome from './Pages/HeroSection/Welcome.jsx'


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