import { useEffect, useRef } from "react";
import "../style/Skills.css";

function Skills() {
  const skillsRef = useRef(null);

  useEffect(() => {
    const skillsSection = skillsRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    if (skillsSection) observer.observe(skillsSection);
    return () => { if (skillsSection) observer.unobserve(skillsSection); };
  }, []);

  const skillCategories = [
    {
      title: "Frontend",
      className: "frontend",
      icon: (
        <svg className="skillCardIcon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
          <line x1="8" y1="21" x2="16" y2="21"></line>
          <line x1="12" y1="17" x2="12" y2="21"></line>
        </svg>
      ),
      skills: [
        { name: "HTML",        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "CSS",         img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
        { name: "JavaScript",  img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "React",       img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Bootstrap",   img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
      ],
    },
    {
      title: "Backend",
      className: "backend",
      icon: (
        <svg className="skillCardIcon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
          <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3"></path>
        </svg>
      ),
      skills: [
        { name: "Python",   img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "Django",   img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
        { name: "DRF",      img: "https://cdn.simpleicons.org/django/092E20" },
        { name: "REST API", img: "https://cdn.simpleicons.org/fastapi/009688" },
      ],
    },
    {
      title: "Database & Cloud",
      className: "database",
      icon: (
        <svg className="skillCardIcon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
          <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3"></path>
        </svg>
      ),
      skills: [
        { name: "MySQL",    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
        { name: "Supabase", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg" },
        { name: "Vercel",   img: "https://cdn.simpleicons.org/vercel/ffffff" },
        { name: "Render",   img: "https://cdn.simpleicons.org/render/46E3B7" },
      ],
    },
    {
      title: "Tools & IDEs",
      className: "tools",
      icon: (
        <svg className="skillCardIcon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
        </svg>
      ),
      skills: [
        { name: "VS Code", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
        { name: "Git",     img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
        { name: "GitHub",  img: "https://cdn.simpleicons.org/github/ffffff" },
        { name: "Postman", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
      ],
    },
  ];

  return (
    <section className="skillsSection" id="skills" ref={skillsRef}>
      <div className="skillsContainer">
        <p className="sectionTag">Technical Skills</p>
        <h2>Technical Skills</h2>
        <p className="skillsIntro">
          A comprehensive overview of my technical expertise.
        </p>

        <div className="skillsGrid">
          {skillCategories.map((category, index) => (
            <div className={`skillCard ${category.className}`} key={index}>
              <div className="skillCardHeader">
                {category.icon}
                <h3>{category.title}</h3>
              </div>

              <div className="skillsList">
                {category.skills.map((skill, sIndex) => (
                  <span className="skillBadge" key={sIndex}>
                    <span className="skillIconWrap">
                      <img
                        src={skill.img}
                        alt={skill.name}
                        className="skillIcon"
                        onError={(e) => { e.target.style.display = "none"; }}
                      />
                    </span>
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;