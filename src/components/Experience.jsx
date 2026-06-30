import { useEffect, useRef, useState } from "react";
import "../style/Experience.css";

function Experience() {
  const sectionRef = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
          observer.disconnect(); // animate once only
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const experiences = [
    {
      role: "Python Full Stack Developer Intern",
      company: "NIM Technologies",
      duration: "2025 – Present",
      responsibilities: [
        "Developed responsive full-stack web applications using Python, Django, React.js, and MySQL.",
        "Designed and developed secure REST APIs for frontend and backend communication.",
        "Built reusable React components and responsive user interfaces.",
        "Developed complete Admin Dashboard modules for managing users, products, orders, and reports.",
        "Integrated Razorpay Payment Gateway for secure online payments and order processing.",
        "Implemented user authentication, authorization, CRUD operations, and database management.",
        "Used Git and GitHub for version control and collaborative development.",
        "Fixed bugs, optimized application performance, and improved user experience.",
      ],
      technologies: [
        "Python",
        "Django",
        "React.js",
        "JavaScript",
        "MySQL",
        "HTML",
        "CSS",
        "Bootstrap",
        "REST API",
        "Razorpay",
        "GitHub",
      ],
    },
  ];

  return (
    <section
      className={`experienceSection ${show ? "show" : ""}`}
      id="experience"
      ref={sectionRef}
    >
      <div className="experienceContainer">
        <p className="sectionTag">Work Experience</p>

        <h2>Professional Experience</h2>

        <p className="experienceIntro">
          Building scalable full-stack web applications with modern frontend,
          secure backend development, payment gateway integration, and
          admin dashboard solutions.
        </p>

        <div className="experienceTimeline">
          {experiences.map((exp, index) => (
            <div className="expItem" key={index}>
              <div className="expDot"></div>

              <div className="expCard">
                <span className="expDuration">{exp.duration}</span>

                <h4 className="expRole">{exp.role}</h4>

                <p className="expCompany">{exp.company}</p>

                <ul className="expResponsibilities">
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i}>{resp}</li>
                  ))}
                </ul>

                <div className="expSkills">
                  {exp.technologies.map((tech, i) => (
                    <span className="skillTag" key={i}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;