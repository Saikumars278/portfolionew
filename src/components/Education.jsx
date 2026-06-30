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

  const certification = {
    type: "certification",
    status: "Completed",
    degree: "Full Stack Web Development",
    field: "Python / React Stack",
    college: "MashupStack, Thiruvananthapuram",
  };

  return (
    <section
      className={`educationSection ${show ? "show" : ""}`}
      id="education"
      ref={sectionRef}
    >
      <div className="educationContainer">
        <p className="sectionTag">Education & Certification</p>
        <h2>Education & Certification</h2>
        <p className="educationIntro">
          My educational background and professional certifications in technology and engineering.
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

          {/* Right Column — Professional Certification */}
          <div className="educationGroup">
            <h3 className="groupTitle">
              <span className="groupIcon cert">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="8" r="6"></circle>
                  <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"></path>
                </svg>
              </span>
              Professional Certification
            </h3>

            <div className="certCard">
              <span className="certStatus">{certification.status}</span>
              <h4 className="eduDegree">{certification.degree}</h4>
              <p className="eduField">{certification.field}</p>
              <p className="eduCollege">{certification.college}</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Education;