import { useState, useEffect, useRef } from "react";
import "../style/Footer.css";

function Footer() {
  const footerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = footerRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <footer
      className={`footer${isVisible ? " show" : ""}`}
      ref={footerRef}
    >
      <div className="footerContainer">
        <p className="footerInfo">
          <span className="highlightName">Saikumar S.</span>
          <span className="separator">|</span>
          <span className="roleText">Python Full Stack Developer</span>
        </p>

        <div className="footerSocials">
          {/* GitHub */}
          <a
            href="https://github.com/Saikumars278"
            target="_blank"
            rel="noopener noreferrer"
            className="socialBtn github"
            aria-label="GitHub"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/saikumar-s-a18968302/"
            target="_blank"
            rel="noopener noreferrer"
            className="socialBtn linkedin"
            aria-label="LinkedIn"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>

          {/* Email */}
          <a
            href="mailto:s.saikumar2780@gmail.com"
            className="socialBtn email"
            aria-label="Email"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
          </a>
        </div>

        <p className="copyrightText">
          &copy; {new Date().getFullYear()} Saikumar S. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;