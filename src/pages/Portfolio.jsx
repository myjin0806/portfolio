import React, {useState} from 'react'
import projectsData from '../data/projectsData.json';


const Portfolio = () => {
  const [selectedType, setSelectedType] = useState('ALL'); // 필터 버튼 상태
  const [selectedProject, setSelectedProject] = useState(projectsData[0]); // 선택된 프로젝트 상태

  // 필터링된 프로젝트 리스트
  const filteredProjects = selectedType === 'ALL'
  ? projectsData
  : projectsData.filter(project => project.class === selectedType);

  // 프로젝트 썸네일 클릭 핸들러
  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  return (
    <div className='jouralLayout portfolio'>
      {/* 왼쪽영역 */}
      <div className="leftBoard board">
        <div className="portfolioWrap">
          <div className="portfolioTitle">
            <h2>my PorTfoilo</h2>
          </div> 
          {/* 버튼 영역 */}
          <div className="portfolioBtns">
          <button id='all' className={selectedType === 'ALL' ? 'on' : ''} onClick={() => setSelectedType('ALL')}></button>
            <button id='responsive' className={selectedType === 'RESPONSIVE' ? 'on' : ''} onClick={() => setSelectedType('RESPONSIVE')}></button>
            <button id='react' className={selectedType === 'REACT' ? 'on' : ''} onClick={() => setSelectedType('REACT')}></button>
          </div>
          <div className="projectThumWrap">
          {filteredProjects.map((project, index) => (
              <div 
                key={index} 
                className={`projectThum ${selectedProject === project ? 'active' : ''}, ${project.type}`}
                onClick={() => handleProjectClick(project)} // 클릭 이벤트
              >
                <img src={`images/${project.image}`} alt={project.title} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 오른쪽 */}
      <div className="rightBoard board">
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
                <p>{selectedProject.during}</p>
              </div>
              <div className="skills">
                <h4>SKILLS</h4>
                <p>{selectedProject.skill.join(', ')}</p>
              </div>
              <div className="desc">
                <h4>프로젝트 설명</h4>
                <p>{selectedProject.description}</p>
              </div>
            </div>
            <div className="projectLink">
              <button onClick={() => window.open(selectedProject.github, '_blank')}>
                GitHub
              </button>
              <button onClick={() => window.open(selectedProject.demo, '_blank')}>
                Site
              </button>
            </div>
          </div>
        ) : (
          <p>선택한 프로젝트가 없습니다.</p>
        )}
      </div>
    </div>
  )
}

export default Portfolio