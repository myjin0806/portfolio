import React, { useEffect, useState } from 'react';
import Index1Content from '../components/Index1Content'
import Index2Content from '../components/Index2Content'
import skillsData from  '../data/skillsData.json'

const About = () => { 
  // 상태로 활성화된 인덱스를 추적
  const [activeIndex, setActiveIndex] = useState(1);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 480);
  

  useEffect(() => {
    // 화면 크기 변경 시 처리
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 480);
    };
    window.addEventListener('resize', handleResize);
  }, []);

  if(!isMobile){
    return(
      <div className="jouralLayout about">
        <div className="tapMenuWrap">
          {/* 클릭 시 activeIndex를 설정 */}
          <button>
            <img
            src="images/index01.png"
            alt="index01"
            className="index01"
            onClick={() => setActiveIndex(1)}
            style={{
              left: '105px',
              zIndex: activeIndex === 1 ? 10 : 8,
            }}
          />
          </button>
          <button>
            <img
              src="images/index02.png"
              alt="index02"
              className="index02"
              onClick={() => setActiveIndex(2)}
              style={{
                left: '200px',
                zIndex: activeIndex === 2 ? 10 : 8,
              }}
            />
          </button>
        </div>
        <div className="booksWrap">
          <div className={`index01Content ${activeIndex === 1 ? 'active' : ''}`}>
            {activeIndex === 1 && <Index1Content />}
          </div>
          <div className={`index02Content ${activeIndex === 2 ? 'active' : ''}`}>
            {activeIndex === 2 && <Index2Content />}
          </div>
        </div>
      </div>
    )
  }else{
    return(
      <div className="aboutMobileWrap">
        <div className='aboutMobile jouralLayout'>
          <Index1Content />
          <div className="mobileSkillsWrap">
            <div className="btnImg">
              <img src="images/button.png" alt="버튼" />
              <span className='btnTitle'>SKILLS</span>
            </div>
            <div className="mobileSkills">
              {Object.entries(skillsData).map(([key, skill], index)=>(
                <div className="mobileSkill">
                  <h3>{skill.title}</h3>
                  <ul>
                    {skill.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default About;
