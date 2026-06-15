import "../style/About.css";

function About() {
  return (
    <section className="about" id="about">
      <div className="aboutContainer">
        <div className="aboutLeft">
          <p className="sectionTag">About Me</p>

          <h2>Profile Summary</h2>

          <p className="aboutText">
            As a passionate Python Full Stack Developer, I bring a unique combination of software development skills and strong problem-solving abilities. I specialize in building dynamic, responsive web applications and continuously learning new technologies.
          </p>

          <div className="aboutStatsGrid">
            <div className="statCard">
              <h3>2+</h3>
              <p>Frontend Projects</p>
            </div>
            <div className="statCard">
              <h3>2+</h3>
              <p>Backend Projects</p>
            </div>
            <div className="statCard">
              <h3>8+</h3>
              <p>Technologies Learned</p>
            </div>
            <div className="statCard">
              <h3>1</h3>
              <p>Certifications</p>
            </div>
          </div>
        </div>

        <div className="aboutRight">
          <div className="aboutBox">
            <h3>Quick Facts</h3>

            <ul className="factList">
              <li className="factItem">
                <span className="factLabel">Location</span>
                <span className="factValue cyan">Kanyakumari</span>
              </li>
              <li className="factItem">
                <span className="factLabel">Experience</span>
                <span className="factValue">Entry Level</span>
              </li>
              <li className="factItem">
                <span className="factLabel">Role</span>
                <span className="factValue">Full Stack Developer</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;