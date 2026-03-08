import './App.css';
import { useEffect, useState } from "react";
import IntroPage from './pages/intropage/IntroPage';
import Navbar from './pages/navbar/Navbar';
import Skills from './pages/skills/Skills';
import Projects from './pages/projects/Projects';
import Experience from './pages/experience/Experience';
import Contact from './pages/contact/Contact';

function App() {
  const [entered, setEntered] = useState(false);
  const [activePage, setActivePage] = useState("skills");

  useEffect(() => {
    const value = localStorage.getItem("entered");
    if (value === "yes") {
      setEntered(true);
    }
  }, []);

  const renderPage = () => {
    switch (activePage) {
      case "skills":      return <Skills />;
      case "experience":  return <Experience setActivePage={setActivePage} />;
      case "projects":    return <Projects />;
      case "contact": return <Contact />;
      default:            return <Skills />;
    }
  };

  return (
    <>
      {entered && (
        <Navbar
          setEntered={setEntered}
          activePage={activePage}
          setActivePage={setActivePage}
        />
      )}
      {entered && renderPage()}
      {!entered && <IntroPage setEntered={setEntered} />}
    </>
  );
}

export default App;