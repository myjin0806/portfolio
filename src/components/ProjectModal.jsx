import React from 'react';

const ProjectModal = ({ project, onClose, isMobile, isModalOpen }) => {
  if (!project) {
    return null;
  }

  const overlayClass = `modal-overlay ${isModalOpen ? 'visible' : 'hidden'}`;
  const modalContentClass = `rightBoard board ${isMobile && !isModalOpen ? 'hidden' : ''} ${isMobile && isModalOpen ? 'visible' : ''}`;

  return (
    <div className={overlayClass} onClick={onClose}>
      <div className={modalContentClass} onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}></button>
        <div className="projectWrap">
          <div className="projectHeader">
            <div className="projectImage">
              <img src={`images/${project.image}`} alt={project.title} />
            </div>
            <div className="projectTitle">
              <h4>{project.type} PROJECT</h4>
              <h3>{project.title}</h3>
            </div>
          </div>
          <div className="projectDetail">
            <div className="during">
              <h4>프로젝트 기간</h4>
              <p>{project.during || 'No duration provided'}</p>
            </div>
            <div className="skills">
              <h4>SKILLS</h4>
              <p>{project.skill ? project.skill.join(', ') : 'No skills listed'}</p>
            </div>
            <div className="desc">
              <h4>프로젝트 설명</h4>
              <p>{project.description || 'No description available'}</p>
            </div>
          </div>
          <div className="projectLink">
            <button onClick={() => window.open(project.demo, '_blank')}>DEMO</button>
            <button onClick={() => window.open(project.github, '_blank')}>GitHub</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
