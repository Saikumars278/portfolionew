import { useEffect, useRef, useState } from "react";
import "../style/Education.css";

function Education() {
  const sectionRef = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const education = [
    {
      type: "education",
      year: "2020 - 2023",
      degree: "Bachelor of Engineering",
      field: "Mechanical Engineering",
      college: "Amrita College of Engineering, Nagercoil",
    },
    {
      type: "education",
      year: "2018 - 2020",
      degree: "Diploma",
      field: "Mechanical Engineering",
      college: "Amrita Polytechnic College, Nagercoil",
    },
  ];

  const internship = {
    type: "internship",
    duration: "Nov 2024 – May 2025",
    title: "Python Full Stack Developer Intern",
    company: "MashupStack",
    points: [
      "Worked on full-stack web application development",
      "Developed REST APIs using Django REST Framework",
      "Tested APIs using Postman",
    ],
  };

  return (
    <section
      className={`educationSection ${show ? "show" : ""}`}
      id="education"
      ref={sectionRef}
    >
      <div className="educationContainer">
        <p className="sectionTag">Education & Internship</p>
        <h2>Education & Internship</h2>
        <p className="educationIntro">
          My educational background and hands-on internship experience in technology and engineering.
        </p>

        <div className="educationGrid">

          {/* Left Column — Educational Background */}
          <div className="educationGroup">
            <h3 className="groupTitle">
              <span className="groupIcon edu">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                  <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                </svg>
              </span>
              Educational Background
            </h3>

            <div className="timeline">
              {education.map((item, index) => (
                <div className="timelineItem" key={index}>
                  <div className="timelineDot edu"></div>
                  <div className="educationCard">
                    <span className="eduYear">{item.year}</span>
                    <h4 className="eduDegree">{item.degree}</h4>
                    <p className="eduField">{item.field}</p>
                    <p className="eduCollege">{item.college}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column — Internship */}
          <div className="educationGroup">
            <h3 className="groupTitle">
              <span className="groupIcon cert">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                </svg>
              </span>
              Internship
            </h3>

            <div className="certCard">
              <span className="certStatus">{internship.duration}</span>
              <h4 className="eduDegree">{internship.title}</h4>
              <p className="eduField">{internship.company}</p>
              <ul className="internshipPoints">
                {internship.points.map((point, index) => (
                  <li key={index} className="eduCollege">
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Education;