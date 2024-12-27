import React, { useState, useEffect } from 'react';
import projectsData from '../data/projectsData.json';

const Portfolio = () => {
  const [selectedType, setSelectedType] = useState('ALL');
  const [selectedProject, setSelectedProject] = useState(projectsData[0] || {}); // 초기값 확인
  const [isRightBoardVisible, setIsRightBoardVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 480);

  const filteredProjects = selectedType === 'ALL'
    ? projectsData
    : projectsData.filter(
        project => Array.isArray(project.class) && project.class.includes(selectedType)
      );

  useEffect(() => {
    // 화면 크기 변경 시 처리
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 480);
    };
    window.addEventListener('resize', handleResize);

    // close-btn 클릭 시 오른쪽 보드 숨김 처리
    const closeButton = document.querySelector('.close-btn');
    const rightBoard = document.querySelector('.rightBoard');

    if (closeButton && rightBoard) {
      closeButton.addEventListener('click', () => {
        rightBoard.classList.remove('visible');
        setIsRightBoardVisible(false);
      });
    }

    // 컴포넌트 언마운트 시 이벤트 리스너 정리
    return () => {
      if (closeButton && rightBoard) {
        closeButton.removeEventListener('click', () => {
          rightBoard.classList.remove('visible');
          setIsRightBoardVisible(false);
        });
      }
      window.removeEventListener('resize', handleResize);
    };
  }, []); // 빈 배열을 전달해 한 번만 실행

  const handleProjectClick = (project) => {
    console.log('Clicked Project:', project); // 클릭한 프로젝트 확인
    setSelectedProject(project);
    if (isMobile) {
      console.log('Mobile view detected, showing right board');
      setIsRightBoardVisible(true);
    }
  };

  return (
    <div className="jouralLayout portfolio">
      <div className="leftBoard board">
        <div className="portfolioWrap">
          <div className="portfolioTitle">
            <img src="images/button.png" alt="모바일 버튼" className="mobileButton" />
            <h2>my Portfolio</h2>
          </div>
          <div className="portfolioBtns">
            <button id="all" className={selectedType === 'ALL' ? 'on' : ''} onClick={() => setSelectedType('ALL')}></button>
            <button id="responsive" className={selectedType === 'RESPONSIVE' ? 'on' : ''} onClick={() => setSelectedType('RESPONSIVE')}></button>
            <button id="react" className={selectedType === 'REACT' ? 'on' : ''} onClick={() => setSelectedType('REACT')}></button>
          </div>
          <div className="projectThumbsWrap">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className={`projectThumb ${selectedProject === project ? 'active' : ''}, ${project.type}`}
                onClick={() => handleProjectClick(project)}
              >
                <img src={`images/${project.image}`} alt={project.title} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={`rightBoard board ${isMobile && isRightBoardVisible ? 'visible' : 'hidden'}`}>
        <button className="close-btn"></button>
        {selectedProject ? (
          <div className="projectWrap">
            <div className="projectHeader">
              <div className="projectImage">
                <img src={`images/${selectedProject.image}`} alt={selectedProject.title} />
              </div>
              <div className="projectTitle">
                <h4>{selectedProject.type} PROJECT</h4>
                <h3>{selectedProject.title}</h3>
              </div>
            </div>
            <div className="projectDetail">
              <div className="during">
                <h4>프로젝트 기간</h4>
                <p>{selectedProject.during || 'No duration provided'}</p>
              </div>
              <div className="skills">
                <h4>SKILLS</h4>
                <p>{selectedProject.skill ? selectedProject.skill.join(', ') : 'No skills listed'}</p>
              </div>
              <div className="desc">
                <h4>프로젝트 설명</h4>
                <p>{selectedProject.description || 'No description available'}</p>
              </div>
            </div>
            <div className="projectLink">
              <button onClick={() => window.open(selectedProject.demo, '_blank')}>DEMO</button>
              <button onClick={() => window.open(selectedProject.github, '_blank')}>GitHub</button>
            </div>
          </div>
        ) : (
          <p>선택한 프로젝트가 없습니다.</p>
        )}
      </div>
    </div>
  );
};

export default Portfolio;
