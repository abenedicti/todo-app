import '../pages/about.css';
import maylisImg from '../assets/Maylis.png';
import annaImg from '../assets/Anna.png';
import githubImg from '../assets/githubIcon.png';
import linkedinImg from '../assets/linkedinIcon.png';
function About() {
  return (
    <div className="about-page">
      <h2>About the team member</h2>
      <p>
        Welcome to our Todo app, built to make your life easier and help you
        stay organized. Add, edit, delete, and mark your daily tasks as
        completed!
      </p>
      <div className="students">
        <div className="student1">
          <img src={maylisImg} alt="student1" />
          <p>MAYLIS IMPERIALI</p>
          <div className="github-info ">
            <img src={githubImg} alt="github logo" />
            <a href="https://github.com/maylis-dev" target="_blank">
              Github
            </a>
          </div>
          <div className="linkedin-info">
            <img src={linkedinImg} alt="linkedin logo" />
            <a
              href="https://www.linkedin.com/in/maylis-imperiali-946a131b7"
              target="_blank"
            >
              LinkedIn
            </a>
          </div>
        </div>
        <div className="student2">
          <img src={annaImg} alt="student2" />
          <p>ANNABELLE BENEDICTI</p>
          <div className="github-info">
            <img src={githubImg} alt="github logo" />
            <a href="https://github.com/abenedicti" target="_blank">
              Github
            </a>
          </div>
          <div className="linkedin-info">
            <img src={linkedinImg} alt="linkedin logo" />
            {/* no link added in purpose */}
            <p>LinkedIn</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;
