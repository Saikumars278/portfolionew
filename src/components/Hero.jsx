import "../style/Hero.css";
import {
  FaPython,
  FaReact,
  FaJsSquare,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiDjango,
  SiMysql,
  SiSupabase,
  SiVercel,
  SiRender,
} from "react-icons/si";

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

    <span><FaPython /> Python</span>
    <span><SiDjango /> Django</span>
    <span><SiDjango /> Django REST Framework</span>
    <span><FaReact /> React</span>
    <span><FaJsSquare /> JavaScript</span>
    <span><SiMysql /> MySQL</span>
    <span><SiSupabase /> Supabase</span>
    <span><SiVercel /> Vercel</span>
    <span><SiRender /> Render</span>
    <span><FaGitAlt /> GitHub</span>

    {/* Duplicate for infinite scrolling */}

    <span className="duplicateSkill"><FaPython /> Python</span>
    <span className="duplicateSkill"><SiDjango /> Django</span>
    <span className="duplicateSkill"><SiDjango /> Django REST Framework</span>
    <span className="duplicateSkill"><FaReact /> React</span>
    <span className="duplicateSkill"><FaJsSquare /> JavaScript</span>
    <span className="duplicateSkill"><SiMysql /> MySQL</span>
    <span className="duplicateSkill"><SiSupabase /> Supabase</span>
    <span className="duplicateSkill"><SiVercel /> Vercel</span>
    <span className="duplicateSkill"><SiRender /> Render</span>
    <span className="duplicateSkill"><FaGitAlt /> GitHub</span>

  </div>
</div>
      </div>
    </section>
  );
}

export default Hero;
