import { useState, useEffect, useRef } from "react";
import "../style/Navbar.css";

const menuItems = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Experience", id: "experience" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Education", id: "education" },
  { label: "Contact", id: "contact" },
];

function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isOpen, setIsOpen] = useState(false);
  const navbarRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;
      let currentSection = "home";

      for (const item of menuItems) {
        const section = document.getElementById(item.id);
        if (section) {
          if (scrollPosition >= section.offsetTop) {
            currentSection = item.id;
          }
        }
      }

      // If scrolled to the absolute bottom, select the last item
      if (window.innerHeight + Math.round(window.scrollY) >= document.body.offsetHeight - 50) {
        currentSection = menuItems[menuItems.length - 1].id;
      }

      setActiveSection(currentSection);
    };

    const handleOutsideClick = (e) => {
      if (
        navbarRef.current &&
        !navbarRef.current.contains(e.target)
      ) {
        setIsOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("click", handleOutsideClick);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setIsOpen(false);
    setActiveSection(id);

    const section = document.getElementById(id);

    if (section) {
      const navbarHeight = 80;

      window.scrollTo({
        top: section.offsetTop - navbarHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      {/* Full-screen overlay when mobile menu is open */}
      <div
        className={`navbar-overlay ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(false)}
      />
      <nav className="navbar-container" ref={navbarRef}>
        <div className="navbar-backdrop"></div>
        <div className="navbar-capsule">
          <div className="navbar-inner">
          <a
            href="#home"
            className="navbar-logo"
            onClick={(e) => handleNavClick(e, "home")}
          >
            SAIKUMAR<span>.</span>
          </a>

          <button
            className={`navbar-toggle ${isOpen ? "open" : ""}`}
            onClick={(e) => {
              e.stopPropagation();
              setIsOpen(!isOpen);
            }}
            aria-label="Toggle Menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <ul className={`navbar-menu ${isOpen ? "open" : ""}`}>
            {menuItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={
                    activeSection === item.id
                      ? "navbar-link active"
                      : "navbar-link"
                  }
                  onClick={(e) =>
                    handleNavClick(e, item.id)
                  }
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
    </>
  );
}

export default Navbar;