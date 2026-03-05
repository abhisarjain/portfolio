import './App.css';
import { useEffect, useState } from "react";
import IntroPage from './pages/intropage/IntroPage';
import Navbar from './pages/navbar/Navbar';
import Skills from './pages/skills/Skills';

function App() {
  const [entered, setEntered] = useState(false);
  useEffect(() => {

    const value = localStorage.getItem("entered");

    if (value === "yes") {
      setEntered(true);
    }

  }, []);
  return (

    <>

      {entered && <Navbar setEntered={setEntered} />}
      {entered && <Skills />}

      {!entered && <IntroPage setEntered={setEntered} />}

    </>
  );
}

export default App;
