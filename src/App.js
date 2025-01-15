import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Navbar from './components/Navbar';
import Hero from "./components/Hero"
import Card from "./components/Card"
import Footer from './components/Footer';
import Register from "./components/Register"
import Login from './components/Login';
import DiseaseDetails from './components/DiseaseDetails';
import About from './components/About';
import Support from './components/Support';
import UserGuide from "./components/UserGuide";
import AuthForm from './components/AuthForm';
import SegmentedImage from './components/SegmentedImage';





function App() {

  const scrollToFooter = () => {
    const footerElement = document.getElementById('footer');
    if (footerElement) {
      footerElement.scrollIntoView({ behavior: 'smooth' });
    }
  };


  const scrollToTop = () =>{
    const logoelement = document.getElementById("header")
    if(logoelement){
      logoelement.scrollIntoView({behavior:'smooth'})
    }
  }

  const scrollToLib = () =>{
    const logoelement = document.getElementById("lib")
    if(logoelement){
      logoelement.scrollIntoView({behavior:'smooth'})
    }
  }

  return (
    <div className="App">

      <Router>

        <Navbar scrollToFooter={scrollToFooter} scrollToLib={scrollToLib}></Navbar>

      <Routes>

        <Route path="/" element={<><Hero></Hero><Card></Card><AuthForm></AuthForm></>}></Route>

        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/Login" element={<Login></Login>}></Route>
        <Route path="/details/:diseasename" element={<DiseaseDetails></DiseaseDetails>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/support" element={<Support></Support>}></Route>
        <Route path="/userGuide" element={<UserGuide></UserGuide>}></Route>

        <Route path="/results" element={<SegmentedImage></SegmentedImage>}></Route>

      </Routes>

      <Footer scrollToTop={scrollToTop}></Footer>

      </Router>
       
    </div>
  );
}

export default App;
