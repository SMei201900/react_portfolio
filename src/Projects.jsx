function Projects() {
  return <div>
    <section id="projects">
        <h1>Projects</h1>
        <div className="project-grid">
            <div className="project-tile">
                <div className="project-title">
                    <h3>
                        <a href="https://codesandbox.io/p/sandbox/heuristic-cdn-997vmr"
                        target="_blank"
                        >Tribute Page</a>
                    </h3>
                </div>
                <div className="project-image">
                    <img 
                    className="tribute-page-img" 
                    src="#" 
                    alt="Rosalin Franklin as the Cover of Time Magazine" /> 
                </div>
            </div>

            <div className="project-tile">
                <div className="project-title">
                    <h3>
                        <a href="https://codesandbox.io/p/sandbox/lingering-wave-k554lr?file=%2Findex.html" target="_blank">Survey</a>
                    </h3>
                </div>
                <div className="project-image">
                    <img src="#" alt="Survey Icon" /> 
                </div>
            </div>

            <div className="project-tile">
                <div className="project-title">
                    <h3>
                        <a href="https://github.com/SMei201900/bookstore" target="_blank">Bookstore</a>
                    </h3>
                </div>
                <div className="project-image">
                    <img src="#" alt="Bookstore Icon" /> 
                </div>
            </div>
        </div>
    </section>
</div>
};

export default Projects;
