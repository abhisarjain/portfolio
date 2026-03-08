import "./components/Navbar.css";

export default function Navbar({ setEntered, activePage, setActivePage }) {

  const handleExit = () => {
    localStorage.setItem("entered", "no");
    setEntered(false);
  };

  const navLinks = [
    { key: "skills",     label: "Skills"   },
    { key: "experience", label: "Exp"      },
    { key: "projects",   label: "Projects" },
    { key: "contact",    label: "Contact"  },
  ];

  return (
    <div className="navbar-container">
      <div className="navbar-card">

        <div className="nav-left">
          <h3 onClick={() => setActivePage("skills")} style={{ cursor: "pointer", margin: 0 }}>
            Abhisar Jain
          </h3>
        </div>

        <div className="nav-right">
          {navLinks.map((link) => (
            <span
              key={link.key}
              className={`nav-link ${activePage === link.key ? "nav-active" : ""}`}
              onClick={() => setActivePage(link.key)}
            >
              {link.label}
            </span>
          ))}

          <button onClick={handleExit} className="exit-btn">
            🚪 Exit
          </button>
        </div>

      </div>
    </div>
  );
}