import React, { useEffect, useState } from 'react';
import Matter from 'matter-js';
import { Engine, Render, World, Bodies, MouseConstraint, Mouse, Events } from 'matter-js';
import Index1Content from '../components/Index1Content'
import Index2Content from '../components/Index2Content'

const About = () => { 
  // 상태로 활성화된 인덱스를 추적
  const [activeIndex, setActiveIndex] = useState(1);

  return (
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
  );
}

export default About;
