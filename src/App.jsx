
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Skill from './components/Skill'
import "./App.css"
import Project from './components/Project'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Footer from './components/Footer'
import 'bootstrap-icons/font/bootstrap-icons.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {

  return (
    <>
      <Navbar/>
      <Home/>
      <About/>
      <Skill/>
      <Project/>
      <Gallery/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
