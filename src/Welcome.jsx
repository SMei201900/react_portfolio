export default function Welcome() {
  return (
    <div>
    <section id="welcome">
        <div className="typewriter">
            <h1>Hello, my name is Sally! </h1>
        </div>
        <p className="typewriter-p">I am an aspiring developer. Here are some of my projects to date.</p>
        <div id="view-project-button"> 
            <a href="#projects">View My Work</a>
        </div>
    </section>
    
    <div id="about">
        <h1>About Me</h1>
        <div id="about-text"> 
            <div id="about-left-column">
                <p>I build things for web and mobile.</p>
                <p>Currently training in app development with NPower and pursuing certifications in frontend design and UX/UI. </p>
                <p>Passionate about coding and design and the intersection of them.</p>
            </div>

            <div id="about-right-column">
                <section id="skills">
                    <div className="skill-button">HTML/CSS</div>
                    <div className="skill-button">JavaScript</div>
                    <div className="skill-button">React</div>
                </section>
            </div>
        </div>
    </div>

    </div>
  );
}