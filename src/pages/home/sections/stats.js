import React from 'react';
import '../css/stats.css'; 
import projects from '../../../assets/images/projects.png';
import clients from '../../../assets/images/clients.png';
import BottomToTopTransition from '../../../components/transitionContainer';

const ProjectStats = () => {
  return (
    <div>
        <BottomToTopTransition>
        <div className="project-stats">
            <div className="stat">
                <div className="stat-icon">
                <img src={projects} alt="Project Icon" />
                </div>
                <div className='stat-content'>
                    <div className="stat-value">50+</div>
                    <div className="stat-label">Successful Projects</div>
                </div>
                
            </div>

            <div className="stat">
                <div className="stat-icon">
                <img src={clients} alt='Clients' />
                </div>
                <div className='stat-content'>
                    <div className="stat-value">Satisfied Clients</div>
                    <div className="stat-label">Across the world</div>
                </div>
                
            </div>
        </div>
        </BottomToTopTransition>
    </div>
    
  );
}

export default ProjectStats;