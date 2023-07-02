
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects'
import Contact from './components/Contact'


import {

  BrowserRouter,
  Route,

  Routes,
} from "react-router-dom";

import Certifications from './components/Certifications';
function App() {
  return (
    <>

<BrowserRouter basename={process.env.PUBLIC_URL}>
<Header/>
<Routes>

  <Route path="/" element={<Home/>}/>
  <Route path="/skills" element={<Skills/>}/>
  {/* <Route path="/workexperience" element={<Workex/>}/> */}
  <Route path="/projects" element={<Projects/>}/>
  <Route path="/contact" element={<Contact/>}/>
  <Route path="/experience" element={<Experience/>}/>
  <Route path="/certifications" element={<Certifications/>}/>
  
  

</Routes>
</BrowserRouter>


   
    {/* <Home/> */}
    {/* <Skills/> */}
    </>
  );
}

export default App;
