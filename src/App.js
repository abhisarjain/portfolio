import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects'
import Contact from './components/Contact'
import Eduex from './components/Eduex';
import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter,
  Route,
  Router,
  Routes,
} from "react-router-dom";
import Workex from './components/Workex';
function App() {
  return (
    <>

<BrowserRouter>
<Header/>
<Routes>

  <Route path="/" element={<Home/>}/>
  <Route path="/skills" element={<Skills/>}/>
  <Route path="/workexperience" element={<Workex/>}/>
  <Route path="/projects" element={<Projects/>}/>
  <Route path="/contact" element={<Contact/>}/>
  <Route path="/educationexperience" element={<Eduex/>}/>
  
  

</Routes>
</BrowserRouter>


   
    {/* <Home/> */}
    {/* <Skills/> */}
    </>
  );
}

export default App;
