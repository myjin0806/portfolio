import { useState } from "react";
import skillsData from '../data/skillsData.json';
import React from 'react';


// 인덱스 2 콘텐츠 컴포넌트
const Index2Content = () => {
  const [currentSkill, setCurrentSkill] = useState('HTML');

  return (
    <div className='pages'>
      {/* Page 3: 스킬 아이콘 */}
      <div className='page03 page'>
        <div className='skillIcons'>
          {Object.keys(skillsData).map((skillKey, idx) => (
            <button
              key={idx}
              className='skillIcon'
              onClick={() => setCurrentSkill(skillKey)}
            >
              <img
                src={`images/skill_${skillKey.toLowerCase()}.png`}
                alt={`${skillKey} 아이콘`}
              />
            </button>
          ))}
        </div>
      </div>
      {/* Page 4: 스킬 설명 */}
      <div className='page04 page'>
        <div className='skillDescription'>
          <div
            className={`skillTitle ${
              currentSkill === 'Photoshop' || currentSkill === 'Responsive Web' ? 'smallFont' : ''
            }`}
          >
            {skillsData[currentSkill].title}
          </div>
          <ul className='skillDetail'>
            {skillsData[currentSkill].details.map((detail, idx) => (
              <li key={idx}>{detail}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Index2Content