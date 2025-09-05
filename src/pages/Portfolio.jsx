import React, { useState, useEffect } from 'react';
import projectsData from '../data/projectsData.json';
import ProjectModal from '../components/ProjectModal';

const Portfolio = () => {
  const [selectedType, setSelectedType] = useState('ALL');
  const [selectedProject, setSelectedProject] = useState(projectsData[0] || {}); // 초기값 확인
  const [isModalOpen, setIsModalOpen] = useState(false);
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

    // 컴포넌트 언마운트 시 이벤트 리스너 정리
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // 빈 배열을 전달해 한 번만 실행

  const handleProjectClick = (project) => {
    console.log('Clicked Project:', project); // 클릭한 프로젝트 확인
    setSelectedProject(project);
    setIsModalOpen(true); // 모달 열기
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // 모달 닫기
    setSelectedProject(null); // 선택된 프로젝트 초기화
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
      <ProjectModal
          project={selectedProject}
          onClose={handleCloseModal}
          isMobile={isMobile}
          isModalOpen={isModalOpen} // 모달 열림 여부
        />
    </div>
  );
};

export default Portfolio;
