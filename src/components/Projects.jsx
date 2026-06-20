import { useState, useEffect, useRef } from "react";
import "../style/Projects.css";

function Projects() {
  const [activeCredential, setActiveCredential] = useState(null);
  const credRef = useRef(null);

  // Close credential panel on any click outside it
  useEffect(() => {
    if (!activeCredential) return;
    const handleOutsideClick = (e) => {
      if (credRef.current && !credRef.current.contains(e.target)) {
        setActiveCredential(null);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [activeCredential]);

  const projectsList = [
    {
      number: "01",
      category: "Full Stack Development",
      title: "Attendance Management System",
      desc: "An end-to-end attendance system featuring authentication, attendance tracking, admin dashboard, and full CRUD operations.",
      features: ["JWT Authentication", "Admin & User Dashboards", "Attendance CRUD", "REST API Integration"],
      tech: "React.js, Django, Django REST Framework, MySQL",
      dualButtons: true,
      adminLink: "https://github.com/Saikumars278",
      userLink: "https://github.com/Saikumars278",
      adminCreds: { username: "admin", password: "admin@123" },
      userCreds: { username: "user", password: "user@123" },
    },
    {
      number: "02",
      category: "Construction Business Website",
      title: "MML Construction",
      desc: "Designed and developed a professional construction company website with service sections, project highlights, company information, and a responsive modern layout.",
      features: ["Service Showcase", "Project Highlights", "Responsive Design", "Contact Form"],
      tech: "React.js, CSS, Responsive Design, Vercel",
      link: "https://github.com/Saikumars278"
    },
    {
      number: "03",
      category: "Logistics Management Platform",
      title: "FIT Logistics Portal",
      desc: "Developed a logistics portal to manage customer profiles, service requests, quotation details, shipment inquiries, and admin-side operations dynamically.",
      features: ["Customer Profiles", "Quotation Management", "Shipment Tracking", "Admin Operations"],
      tech: "React.js, Django, Django REST Framework, MySQL, Supabase, Vercel, Render",
      link: "https://github.com/Saikumars278"
    },
    {
      number: "04",
      category: "Healthcare Management System",
      title: "Hospital Management System",
      desc: "Built a hospital management platform for handling patient records, doctor details, appointment scheduling, admin management, and basic hospital workflow operations.",
      features: ["Patient Records", "Doctor Management", "Appointment Scheduling", "Admin Dashboard"],
      tech: "React.js, Django, Django REST Framework, MySQL",
      link: "https://github.com/Saikumars278"
    },
    {
      number: "05",
      category: "Portal & Job Management",
      title: "Brolichi Job Portal",
      desc: "Designed and built an admin dashboard to handle user/job applications and publish live job postings dynamically.",
      features: ["Live Job Postings", "Application Management", "User & Admin Roles", "Dynamic Dashboard"],
      tech: "React.js, Django, MySQL, Supabase, Vercel, Render",
      dualButtons: true,
      adminLink: "https://github.com/Saikumars278",
      userLink: "https://github.com/Saikumars278",
      adminCreds: { username: "admin", password: "admin@123" },
      userCreds: { username: "user", password: "user@123" },
    },
    {
      number: "06",
      category: "AI Chatbot Application",
      title: "Smart Chatbot System",
      desc: "Built an interactive chatbot application that can respond to user queries, provide instant support, and improve user engagement through a clean chat interface.",
      features: ["AI Responses", "Real-time Chat UI", "OpenAI Integration", "Session Management"],
      tech: "React.js, Python, Django, REST API, OpenAI API",
      link: "https://github.com/Saikumars278"
    }
  ];

  return (
    <section className="projectsSection" id="projects">
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
            <div className="projectCard" key={index}>
              <div className="projectNumber">{project.number}</div>

              <div className="projectCategory">{project.category}</div>

              <h3>{project.title}</h3>

              <p className="projectDesc">{project.desc}</p>

              <p className="projectTech">
                <strong>Technologies:</strong> {project.tech}
              </p>

              {project.dualButtons ? (
                <div className="projectDualSection" ref={credRef}>
                  <div className="projectBtnGroup">
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
                  </div>

                  {/* Admin Credentials Panel */}
                  {activeCredential === `admin-${index}` && project.adminCreds && (
                    <div className="credPanel credPanelGold">
                      <p className="credPanelTitle">🛡️ Admin Credentials</p>
                      <div className="credRow">
                        <span className="credLabel">Username</span>
                        <span className="credValue">{project.adminCreds.username}</span>
                      </div>
                      <div className="credRow">
                        <span className="credLabel">Password</span>
                        <span className="credValue">{project.adminCreds.password}</span>
                      </div>
                      <a
                        href={project.adminLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="credLink"
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
                        <span className="credValue">{project.userCreds.username}</span>
                      </div>
                      <div className="credRow">
                        <span className="credLabel">Password</span>
                        <span className="credValue">{project.userCreds.password}</span>
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