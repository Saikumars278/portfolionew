import { useState, useEffect } from "react";
import "../style/Navbar.css";

function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  // Updated Navbar menu order: Home, About, Skills, Education, Projects, Contact
  const menuItems = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Education", id: "education" },
    { label: "Projects", id: "projects" },
    { label: "Contact", id: "contact" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 160; // Offset for better active state switching

      for (const item of menuItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;

          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setIsOpen(false);
    const el = document.getElementById(id);
    if (el) {
      const offset = 100; // Offset for sticky navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setActiveSection(id);
    }
  };

  return (
    <nav className="navbar-container">
      <div className="navbar-backdrop"></div>
      <div className="navbar-capsule">
        <div className="navbar-inner">
          <a href="#home" onClick={(e) => handleNavClick(e, "home")} className="navbar-logo">
            SAIKUMAR<span>.</span>
          </a>

          <button
            className={`navbar-toggle ${isOpen ? "open" : ""}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <ul className={`navbar-menu ${isOpen ? "open" : ""}`}>
            {menuItems.map((item) => (
              <li key={item.id} className="navbar-item">
                <a
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className={`navbar-link ${activeSection === item.id ? "active" : ""}`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
