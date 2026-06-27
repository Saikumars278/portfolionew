import { TypeAnimation } from "react-type-animation";
import "../style/Hero.css";

const techStack = [
  { name: "Python",      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "Django",      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
  { name: "React",       img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "JavaScript",  img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "HTML",        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS",         img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "Bootstrap",   img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
  { name: "MySQL",       img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "Supabase",    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg" },
  { name: "Git",         img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "GitHub",      img: "https://cdn.simpleicons.org/github/ffffff" },
  { name: "Vercel",      img: "https://cdn.simpleicons.org/vercel/ffffff" },
  { name: "Render",      img: "https://cdn.simpleicons.org/render/46E3B7" },
  { name: "Postman",     img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
  { name: "VS Code",     img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
];

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="heroContent">
        <p className="tag">Python Full Stack Developer</p>

        <h1>
          <TypeAnimation
            sequence={["Hello, I'm Saikumar S", 1000]}
            wrapper="span"
            speed={50}
            style={{ display: "inline-block" }}
            repeat={0}
            cursor={false}
          />
        </h1>

        <h2>
          <TypeAnimation
            sequence={[
              "Python Full Stack Developer", 1500,
              "React Frontend Developer",    1500,
              "Django Backend Developer",    1500,
            ]}
            wrapper="span"
            speed={50}
            style={{ display: "inline-block", color: "#f3d675" }}
            repeat={Infinity}
          />
        </h2>

        <p className="desc">
          Motivated and detail-oriented fresher seeking an entry-level position
          in a dynamic software company. Passionate about coding and
          problem-solving, with a solid foundation in Python, Django, React, and
          modern web technologies.
        </p>

        <div className="buttons">
          <a href="#projects" className="btn gold">View My Work</a>
          <a href="#contact"  className="btn outline">Get In Touch</a>
        </div>

        {/* ── Skill Ticker ── */}
        <div className="skillSlider">
          <div className="skillTrack">
            {/* First set */}
            {techStack.map((tech) => (
              <span key={tech.name} className="trackPill">
                <img src={tech.img} alt={tech.name} className="trackIcon" />
                {tech.name}
              </span>
            ))}
            {/* Duplicate for seamless infinite loop */}
            {techStack.map((tech) => (
              <span key={`dup-${tech.name}`} className="trackPill">
                <img src={tech.img} alt={tech.name} className="trackIcon" />
                {tech.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
