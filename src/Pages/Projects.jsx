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
    img: "/assets/rosalind-franklin-time-magazine-cover.jpg", 
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
            <button className='carouselBtn' onClick={prev}> dot </button>
            
            <div className='project-tile carouselTile'>
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

            <button className='carouselBtn' onClick={next}> triangle </button>

        </div>
    </section>
</div>
};

