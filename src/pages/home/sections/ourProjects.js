// OurProjects.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Heading from '../../../components/heading';
import BottomToTopTransition from '../../../components/transitionContainer';

import '../../../css/textStyles.css';
import '../css/ourProjects.css';

import loyalty_app from '../../../assets/images/loyalty_app_poster.png';
import aggregator from '../../../assets/images/aggregator_poster.png';
import virtual_assistant from '../../../assets/images/virtual_assistant_poster.png';
import booking_app from '../../../assets/images/booking_app_poster.png';

const OurProjects = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const navigate = useNavigate();

    const projects = [
        { title: "Omnichannel Loyalty Apps", image: loyalty_app },
        { title: "Insurtech Aggregator", image: aggregator },
        { title: "Virtual Assistant", image: virtual_assistant },
        { title: "Booking & Reservation Apps", image: booking_app },
    ];
    
    const hoverPoints = [
        { index: 1, points: ["Hospitality", "UAE based"] },
        { index: 2, points: ["Insurance", "Medical", "Travel", "Motor"] },
        { index: 3, points: ["Real Estate", "Virtual Tour"] },
        { index: 4, points: ["Hospitality", "Qatar based"] },
    ];

    const goToVirtualAssistant = () => {
        navigate('/virtual-assistant');
      };

    return (
        <section className='projects' id='products'>
            <BottomToTopTransition>
                <Heading text={"Our Products that make a Difference"} color={"black"} />
            </BottomToTopTransition>
            <BottomToTopTransition>
                <div className="projects-list">
                    {projects.map((project, index) => (
                        <div key={index} 
                             className="project-item" 
                             onMouseEnter={() => setHoveredIndex(index)} 
                             onMouseLeave={() => setHoveredIndex(null)}>
                            <div className='card-heading'>{project.title}</div>
                            <img src={project.image} alt={project.title} />
                            {hoveredIndex === index && (
                                <div className="hover-buttons hover-buttons-desktop project-btn-container">
                                    <div className='project-btn-tags'>
                                    {hoverPoints[index].points.map((point, pointIndex) => (
                                        <button key={pointIndex} className="project-button">{point}</button>
                                    ))}
                                    </div>
                                    <button onClick={goToVirtualAssistant} className="project-button">Explore Project</button>
                                </div>
                            )}
                            <div className="hover-buttons hover-buttons-mobile project-btn-container">
                                <div className='project-btn-tags'>
                                {hoverPoints[index].points.map((point, pointIndex) => (
                                    <button key={pointIndex} className="project-button">{point}</button>
                                ))}
                                </div>
                                <button onClick={goToVirtualAssistant} className="project-button">Explore Project</button>
                            </div>
                        </div>
                    ))}
                </div>
            </BottomToTopTransition>
        </section>
    );
}

export default OurProjects;
