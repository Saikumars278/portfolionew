import { useState, useEffect, useRef } from "react";
import "../style/Projects.css";

function Projects() {
  const [activeCredential, setActiveCredential] = useState(null);
  const [copiedState, setCopiedState] = useState("");
  const credRef = useRef(null);

  const handleCopy = (text, key) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopiedState(key);
      setTimeout(() => setCopiedState(""), 2000);
    }
  };

  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  // Close credential panel on any click outside it
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (activeCredential && !e.target.closest(".projectDualSection")) {
        setActiveCredential(null);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [activeCredential]);

  const projectsList = [
    {
      number: "01",
      category: "Full Stack Development",
      title: "Attendance Management System",
      desc: "An end-to-end attendance system featuring authentication, attendance tracking, admin dashboard, and full CRUD operations.",
      features: [
        "JWT Authentication",
        "Admin & User Dashboards",
        "Attendance CRUD",
        "REST API Integration",
      ],
      tech: "React.js, Django, Django REST Framework, MySQL",
      dualButtons: true,
      adminLink: "https://github.com/Saikumars278",
      userLink: "https://github.com/Saikumars278",
      adminCreds: {
        username: "admin",
        password: "admin@123",
      },
      userCreds: {
        username: "user",
        password: "user@123",
      },
    },

    {
      number: "02",
      category: "Healthcare Management System",
      title: "Hospital Management System",
      desc: "Built a hospital management platform for handling patient records, doctor details, appointment scheduling, admin management, and complete hospital workflow operations.",
      features: [
        "Patient Records",
        "Doctor Management",
        "Appointment Scheduling",
        "Admin Dashboard",
      ],
      tech: "React.js, Django, Django REST Framework, MySQL",
      link: "https://github.com/Saikumars278",
    },

    {
      number: "03",
      category: "AI Chatbot Application",
      title: "Smart Chatbot System",
      desc: "Built an interactive AI chatbot application that responds to user queries, provides instant support, and delivers a clean real-time chat experience.",
      features: [
        "AI Responses",
        "Real-time Chat UI",
        "OpenAI Integration",
        "Session Management",
      ],
      tech: "React.js, Python, Django, REST API, GroqCloud API",
      dualButtons: true,
      adminLink: "https://chatbot-backend-tmii.onrender.com",
      userLink: "https://chatbot-frontend-umber-omega.vercel.app/",
      adminCreds: {
        username: "s.saikumar9623@gmail.com",
        password: "SaiKLMNPQR34!$",
      },
    },

    // ===========================
    // CRM PROJECT (Admin Only)
    // ===========================

    {
      number: "04",
      category: "Inventory & Billing System",
      title: "Shop CRM Management System",
      desc: "A complete Shop CRM system for managing products, stock, billing, sales, revenue, and inventory through a secure admin dashboard.",

      features: [
        "Admin Dashboard",
        "Product Management",
        "Stock Management",
        "Billing & GST Invoice",
        "Daily Sales Report",
        "Revenue Analytics",
        "Search Products",
        "Low Stock Alerts",
        "Sales History",
        "Role-Based Authentication",
      ],

     tech: "Next.js, Django, Django REST Framework, MySQL, JWT Authentication, Tailwind CSS",

      dualButtons: true,

      adminLink: "https://github.com/Saikumars278",

      adminCreds: {
        username: "admin",
        password: "admin@123",
      },
      // No userCreds/userLink — this project only shows an Admin Panel button
    },
  ];

  return (
    <section
      className={`projectsSection${isVisible ? " show" : ""}`}
      id="projects"
      ref={sectionRef}
    >
      <div className="projectsContainer">
        <p className="sectionTag">Featured Work</p>

        <h2>Recent Projects and Platforms Built</h2>

        <p className="projectsIntro">
          Here is a selection of web applications, business websites, backend systems,
          healthcare platforms, logistics portals, and AI-based applications that I have
          developed, deployed, and tested.
        </p>

        <div className="projectsGrid">
          {projectsList.map((project, index) => (
            <div
              className="projectCard"
              key={index}
              style={{ "--cardIndex": index }}
            >
              <div className="projectNumber">{project.number}</div>

              <div className="projectCategory">{project.category}</div>

              <h3>{project.title}</h3>

              <p className="projectDesc">{project.desc}</p>

              <p className="projectTech">
                <strong>Technologies: </strong>{project.tech}
              </p>

              {project.dualButtons ? (
                <div className="projectDualSection" ref={credRef}>
                  <div className="projectBtnGroup">
                    {(project.adminLink || project.adminCreds) && (
                      project.adminCreds ? (
                        <button
                          className={`projectBtn projectBtnGold ${activeCredential === `admin-${index}` ? "activeCredBtn" : ""}`}
                          onClick={() =>
                            setActiveCredential(
                              activeCredential === `admin-${index}` ? null : `admin-${index}`
                            )
                          }
                        >
                          🛡️ Admin Panel
                        </button>
                      ) : (
                        <a
                          href={project.adminLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="projectBtn projectBtnGold"
                        >
                          🛡️ Admin Panel
                        </a>
                      )
                    )}

                    {(project.userLink || project.userCreds) && (
                      project.userCreds ? (
                        <button
                          className={`projectBtn projectBtnOutline ${activeCredential === `user-${index}` ? "activeCredBtn" : ""}`}
                          onClick={() =>
                            setActiveCredential(
                              activeCredential === `user-${index}` ? null : `user-${index}`
                            )
                          }
                        >
                          👤 User Panel
                        </button>
                      ) : (
                        <a
                          href={project.userLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="projectBtn projectBtnOutline"
                        >
                          👤 User Panel
                        </a>
                      )
                    )}
                  </div>

                  {/* Admin Credentials Panel */}
                  {activeCredential === `admin-${index}` && project.adminCreds && (
                    <div className="credPanel credPanelGold">
                      <p className="credPanelTitle">🛡️ Admin Credentials</p>
                      
                      <div className="credRow">
                        <span className="credLabel">Username</span>
                        <div className="credValueWrapper">
                          <span className="credValue">{project.adminCreds.username}</span>
                          <button
                            type="button"
                            className={`copyBtn copyBtnGold ${copiedState === `admin-u-${index}` ? "copied" : ""}`}
                            onClick={() => handleCopy(project.adminCreds.username, `admin-u-${index}`)}
                          >
                            {copiedState === `admin-u-${index}` ? "Copied! ✓" : "Copy 📋"}
                          </button>
                        </div>
                      </div>

                      <div className="credRow">
                        <span className="credLabel">Password</span>
                        <div className="credValueWrapper">
                          <span className="credValue">{project.adminCreds.password}</span>
                          <button
                            type="button"
                            className={`copyBtn copyBtnGold ${copiedState === `admin-p-${index}` ? "copied" : ""}`}
                            onClick={() => handleCopy(project.adminCreds.password, `admin-p-${index}`)}
                          >
                            {copiedState === `admin-p-${index}` ? "Copied! ✓" : "Copy 📋"}
                          </button>
                        </div>
                      </div>

                      <a
                        href={project.adminLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="credLink credLinkGold"
                      >
                        Open Admin Panel →
                      </a>
                    </div>
                  )}

                  {/* User Credentials Panel */}
                  {activeCredential === `user-${index}` && project.userCreds && (
                    <div className="credPanel credPanelCyan">
                      <p className="credPanelTitle">👤 User Credentials</p>
                      
                      <div className="credRow">
                        <span className="credLabel">Username</span>
                        <div className="credValueWrapper">
                          <span className="credValue">{project.userCreds.username}</span>
                          <button
                            type="button"
                            className={`copyBtn copyBtnCyan ${copiedState === `user-u-${index}` ? "copied" : ""}`}
                            onClick={() => handleCopy(project.userCreds.username, `user-u-${index}`)}
                          >
                            {copiedState === `user-u-${index}` ? "Copied! ✓" : "Copy 📋"}
                          </button>
                        </div>
                      </div>

                      <div className="credRow">
                        <span className="credLabel">Password</span>
                        <div className="credValueWrapper">
                          <span className="credValue">{project.userCreds.password}</span>
                          <button
                            type="button"
                            className={`copyBtn copyBtnCyan ${copiedState === `user-p-${index}` ? "copied" : ""}`}
                            onClick={() => handleCopy(project.userCreds.password, `user-p-${index}`)}
                          >
                            {copiedState === `user-p-${index}` ? "Copied! ✓" : "Copy 📋"}
                          </button>
                        </div>
                      </div>

                      <a
                        href={project.userLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="credLink credLinkCyan"
                      >
                        Open User Panel →
                      </a>
                    </div>
                  )}
                </div>
              ) : (
                <div className="projectBtnWrapper">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="projectBtn projectBtnGold"
                  >
                    View Project
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;