import "../style/Experience.css";

function Experience() {
  const experiences = [
    {
      role: "Python Full Stack Developer",
      company: "NIM Technologies",
      duration: "Present",
      responsibilities: [
        "Developed full-stack web applications using Python, Django, React, and MySQL.",
        "Built responsive and user-friendly frontend interfaces.",
        "Designed and developed REST APIs for client applications.",
      ],
    },
  ];

  return (
    <section className="experienceSection" id="experience">
      <div className="experienceContainer">
        <p className="sectionTag">Work Experience</p>
        <h2>Work Experience</h2>
        <p className="experienceIntro">
          My professional journey and the roles I've taken on in the tech industry.
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
