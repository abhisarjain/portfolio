import "./components/Navbar.css";

export default function Navbar({setEntered}){

  const handleExit = () => {

    localStorage.setItem("entered","no");

    setEntered(false);

  };

  return(

    <div className="navbar-container">

        <div className="navbar-card">

            <div className="nav-left">
                <h3>Abhisar Jain</h3>
            </div>

            <div className="nav-right">

                <a href="#">Skills</a>
                <a href="#">Exp</a>
                <a href="#">Projects</a>
                <a href="#">Contact</a>

                <button onClick={handleExit} className="exit-btn">
                    🚪 Exit
                </button>

            </div>

        </div>

    </div>

  );

}