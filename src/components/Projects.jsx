import "../style/Projects.css";

function Projects() {
  const projectsList = [
    {
      number: "01",
      category: "Full Stack Development",
      title: "Attendance Management System",
      desc: "An end-to-end attendance system featuring authentication, attendance tracking, admin dashboard, and full CRUD operations.",
      tech: "React.js, Django, Django REST Framework, MySQL",
      dualButtons: true,
      adminLink: "https://github.com/Saikumars278",
      userLink: "https://github.com/Saikumars278"
    },
    {
      number: "02",
      category: "Construction Business Website",
      title: "MML Construction",
      desc: "Designed and developed a professional construction company website with service sections, project highlights, company information, and a responsive modern layout.",
      tech: "React.js, CSS, Responsive Design, Vercel",
      link: "https://github.com/Saikumars278"
    },
    {
      number: "03",
      category: "Logistics Management Platform",
      title: "FIT Logistics Portal",
      desc: "Developed a logistics portal to manage customer profiles, service requests, quotation details, shipment inquiries, and admin-side operations dynamically.",
      tech: "React.js, Django, Django REST Framework, MySQL, Supabase, Vercel, Render",
      link: "https://github.com/Saikumars278"
    },
    {
      number: "04",
      category: "Healthcare Management System",
      title: "Hospital Management System",
      desc: "Built a hospital management platform for handling patient records, doctor details, appointment scheduling, admin management, and basic hospital workflow operations.",
      tech: "React.js, Django, Django REST Framework, MySQL",
      link: "https://github.com/Saikumars278"
    },
    {
      number: "05",
      category: "Portal & Job Management",
      title: "Brolichi Job Portal",
      desc: "Designed and built an admin dashboard to handle user/job applications and publish live job postings dynamically.",
      tech: "React.js, Django, MySQL, Supabase, Vercel, Render",
      link: "https://github.com/Saikumars278"
    },
    {
      number: "06",
      category: "AI Chatbot Application",
      title: "Smart Chatbot System",
      desc: "Built an interactive chatbot application that can respond to user queries, provide instant support, and improve user engagement through a clean chat interface.",
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
                <div className="projectBtnGroup">
                  <a
                    href={project.adminLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="projectBtn projectBtnGold"
                  >
                    Admin Panel
                  </a>

                  <a
                    href={project.userLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="projectBtn projectBtnOutline"
                  >
                    User Panel
                  </a>
                </div>
              ) : (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="projectBtn projectBtnGold"
                >
                  View Project
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;