import "../style/Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="heroContent">
        <p className="tag">Python Full Stack Developer</p>

        <h1>
          Hello, I'm <span>Saikumar S</span>
        </h1>

        <h2>Python Full Stack Developer</h2>

        <p className="desc">
          Motivated and detail-oriented fresher seeking an entry-level position in a dynamic software company. Passionate about coding and problem-solving, with a solid foundation in Python, Django, React, and modern web technologies.
        </p>

        <div className="buttons">
          <a href="#projects" className="btn gold">
            View My Work
          </a>
          <a href="#contact" className="btn outline">
            Get In Touch
          </a>
        </div>

        <div className="skillSlider">
          <div className="skillTrack">
            <span>Python</span>
            <span>Django</span>
            <span>Django REST Framework</span>
            <span>React</span>
            <span>JavaScript</span>
            <span>MySQL</span>
            <span>Supabase</span>
            <span>Vercel</span>
            <span>Render</span>
            <span>GitHub</span>

            <span className="duplicateSkill">Python</span>
            <span className="duplicateSkill">Django</span>
            <span className="duplicateSkill">Django REST Framework</span>
            <span className="duplicateSkill">React</span>
            <span className="duplicateSkill">JavaScript</span>
            <span className="duplicateSkill">MySQL</span>
            <span className="duplicateSkill">Supabase</span>
            <span className="duplicateSkill">Vercel</span>
            <span className="duplicateSkill">Render</span>
            <span className="duplicateSkill">GitHub</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
