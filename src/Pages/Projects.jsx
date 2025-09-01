import '../styling/Projects.css'
import { useState } from 'react';

const projectData = [ 
{ 
    title: "Survey Form",
    link: "https://github.com/SMei201900/survey-form", 
    img: "/assets/survey_icon_by_flaticon.png", 
    alt: "Survey Icon",
}, { 
    title: "Book Store",
    link: "https://codesandbox.io/p/sandbox/heuristic-cdn-997vmr", 
    img: "/assets/bookstore.png", 
    alt: "Bookstore Icon",
}, { 
    title: "Weather App",
    link: "https://github.com/SMei201900/react-weather-project", 
    img: "/assets/weather-icon.png", 
    alt: "Cloud with the Sun peeking out behind it to represent the weather",
}]

export default function Projects() {
    const [currentIndex, setIndex] = useState(0); 

    const next = () => {
        setIndex((prevIndex) => (prevIndex + 1) % projectData.length); 
    }; 

    const prev = () => {
        setIndex( (prevIndex) => 
        prevIndex === 0 ? projectData.length - 1 : prevIndex - 1 );  
    }; 

    const currentProject = projectData[currentIndex]; 
    

  return <div>
    <section id="projects">
        <h1>Projects</h1>

        <div className='carousel'>
            <button className='carouselBtn' onClick={prev}> 
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-left" viewBox="0 0 16 16">
                    <path d="M10 12.796V3.204L4.519 8zm-.659.753-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753"/>
                </svg>    
            </button>

            <div className='project-tile'>
                <div className='project-title'>
                    <h3>
                        <a href={currentProject.link} target="_blank" rel="noreferrer">
                            {currentProject.title}
                        </a>
                    </h3>
                </div>

                <div className='project-image'>
                    <img src={currentProject.img} alt={currentProject.alt} />
                </div>
            </div>

            <button className='carouselBtn' onClick={next}> 
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-right" viewBox="0 0 16 16">
                    <path d="M6 12.796V3.204L11.481 8zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753"/>
                </svg> 
            </button>
        </div>
    </section>
</div>
};

