import { useState, useEffect, useRef } from "react";
import "../style/Projects.css";

function Projects() {
  const [activeCredential, setActiveCredential] = useState(null);
  const [copiedState, setCopiedState] = useState("");

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

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setActiveCredential(null);
      }
    };
    if (activeCredential) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
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
      adminLink: "https://shop-crm-frontend.vercel.app/",
      userLink: "https://shop-crm-frontend.vercel.app/",
      userBtnText: "Live Demo ↗",
      adminCreds: {
        username: "admin",
        password: "admin@123",
      },
    },

    // ============================================
    // ARCHITECTURE & INTERIOR DESIGN STUDIO
    // ============================================
    {
      number: "05",
      category: "Architecture & Interior Studio",
      title: "Shades & Line | Architecture & Interior Design Studio",
      desc: "A premium, responsive portfolio and business website for an architecture and interior design studio, showcasing architectural planning, bespoke interior projects, space styling, and client consultations.",
      features: [
        "Architectural Planning",
        "Luxury Interior Showcase",
        "Space Management & Styling",
        "Interactive Studio Portfolio",
        "Client Consultation Booking",
      ],
      tech: "React.js, Tailwind CSS, JavaScript, Vercel",
      link: "https://interior-studio-website-psi.vercel.app/",
      btnText: "Live Preview ↗",
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
          {projectsList.map((project, index) => {
            const isAdminActive =
              activeCredential?.project.number === project.number &&
              activeCredential?.type === "admin";
            const isUserActive =
              activeCredential?.project.number === project.number &&
              activeCredential?.type === "user";

            return (
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
                  <div className="projectDualSection">
                    <div className="projectBtnGroup">
                      {(project.adminLink || project.adminCreds) && (
                        project.adminCreds ? (
                          <button
                            type="button"
                            className={`projectBtn projectBtnGold ${isAdminActive ? "activeCredBtn" : ""}`}
                            onClick={() =>
                              setActiveCredential(
                                isAdminActive ? null : { type: "admin", project }
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
                            type="button"
                            className={`projectBtn projectBtnOutline ${isUserActive ? "activeCredBtn" : ""}`}
                            onClick={() =>
                              setActiveCredential(
                                isUserActive ? null : { type: "user", project }
                              )
                            }
                          >
                            {project.userBtnText || "👤 User Panel"}
                          </button>
                        ) : (
                          <a
                            href={project.userLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="projectBtn projectBtnOutline"
                          >
                            {project.userBtnText || "👤 User Panel"}
                          </a>
                        )
                      )}
                    </div>
                  </div>
                ) : (
                  <div className="projectBtnWrapper">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="projectBtn projectBtnGold"
                    >
                      {project.btnText || "View Project"}
                    </a>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Credentials Modal Dialog */}
      {activeCredential && (
        <div
          className="credModalBackdrop"
          onClick={() => setActiveCredential(null)}
        >
          <div
            className={`credModalBox ${
              activeCredential.type === "admin"
                ? "credModalGold"
                : "credModalCyan"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="credModalHeader">
              <div className="credModalTitleBlock">
                <span className="credModalIcon">
                  {activeCredential.type === "admin" ? "🛡️" : "👤"}
                </span>
                <div>
                  <h4 className="credModalHeading">
                    {activeCredential.type === "admin"
                      ? "Admin Credentials"
                      : "User Credentials"}
                  </h4>
                  <p className="credModalSub">
                    {activeCredential.project.title}
                  </p>
                </div>
              </div>
              <button
                type="button"
                className="credModalCloseBtn"
                onClick={() => setActiveCredential(null)}
                aria-label="Close credentials modal"
              >
                ✕
              </button>
            </div>

            <div className="credModalBody">
              <div className="credRow">
                <span className="credLabel">Username</span>
                <div className="credValueWrapper">
                  <span className="credValue">
                    {activeCredential.type === "admin"
                      ? activeCredential.project.adminCreds?.username
                      : activeCredential.project.userCreds?.username}
                  </span>
                  <button
                    type="button"
                    className={`copyBtn ${
                      activeCredential.type === "admin"
                        ? "copyBtnGold"
                        : "copyBtnCyan"
                    } ${copiedState === "modal-username" ? "copied" : ""}`}
                    onClick={() =>
                      handleCopy(
                        activeCredential.type === "admin"
                          ? activeCredential.project.adminCreds?.username
                          : activeCredential.project.userCreds?.username,
                        "modal-username"
                      )
                    }
                  >
                    {copiedState === "modal-username"
                      ? "Copied! ✓"
                      : "Copy 📋"}
                  </button>
                </div>
              </div>

              <div className="credRow">
                <span className="credLabel">Password</span>
                <div className="credValueWrapper">
                  <span className="credValue">
                    {activeCredential.type === "admin"
                      ? activeCredential.project.adminCreds?.password
                      : activeCredential.project.userCreds?.password}
                  </span>
                  <button
                    type="button"
                    className={`copyBtn ${
                      activeCredential.type === "admin"
                        ? "copyBtnGold"
                        : "copyBtnCyan"
                    } ${copiedState === "modal-password" ? "copied" : ""}`}
                    onClick={() =>
                      handleCopy(
                        activeCredential.type === "admin"
                          ? activeCredential.project.adminCreds?.password
                          : activeCredential.project.userCreds?.password,
                        "modal-password"
                      )
                    }
                  >
                    {copiedState === "modal-password"
                      ? "Copied! ✓"
                      : "Copy 📋"}
                  </button>
                </div>
              </div>

              <a
                href={
                  activeCredential.type === "admin"
                    ? activeCredential.project.adminLink
                    : activeCredential.project.userLink
                }
                target="_blank"
                rel="noopener noreferrer"
                className={`credLink ${
                  activeCredential.type === "admin"
                    ? "credLinkGold"
                    : "credLinkCyan"
                }`}
              >
                {activeCredential.type === "admin"
                  ? "Open Admin Panel →"
                  : "Open User Panel →"}
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;
