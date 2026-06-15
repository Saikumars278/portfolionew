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
      category: "Admin Portal & Integration",
      title: "FIT Logistics Portal",
      desc: "Developed an admin panel to manage user profiles, coordinate quote requests, and track service inquiries dynamically.",
      tech: "React.js, Django, MySQL, Supabase, Vercel, Render",
      link: "https://github.com/Saikumars278"
    },
    {
      number: "03",
      category: "Portal & Job Management",
      title: "Brolichi Job Portal",
      desc: "Designed and built an admin dashboard to handle user/job applications and publish live postings dynamically.",
      tech: "React.js, Django, MySQL, Supabase, Vercel, Render",
      link: "https://github.com/Saikumars278"
    }
  ];

  return (
    <section className="projectsSection" id="projects">
      <div className="projectsContainer">
        <p className="sectionTag">Featured Work</p>
        <h2>Recent Projects and Platforms Built</h2>
        <p className="projectsIntro">
          Here is a selection of web applications and backend systems that I have developed, deployed, and tested.
        </p>

        <div className="projectsGrid">
          {projectsList.map((project, index) => (
            <div className="projectCard" key={index}>
              <div className="projectNumber">{project.number}</div>
              <div className="projectCategory">{project.category}</div>
              <h3>{project.title}</h3>
              <p className="projectDesc">{project.desc}</p>
              <p className="projectTech"><strong>Technologies:</strong> {project.tech}</p>

              {project.dualButtons ? (
                /* Dual button layout for Attendance Management System */
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
                /* Single button for all other project cards */
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="projectBtn projectBtnGold">
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
