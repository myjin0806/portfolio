import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
/* 페이지 */
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contect from './pages/Contect';
import NotFound from './pages/NotFound';

function App() {
  // 커스텀 커서
  useEffect(() => {
    const pointer = document.createElement('div');
    pointer.classList.add('customCursor');
    document.body.appendChild(pointer);

    const updatePointerStyle = (e) => {
      pointer.style.left = `${e.pageX}px`;
      pointer.style.top = `${e.pageY}px`;
    };

    const handlePointerEnter = () => {
      pointer.style.backgroundImage = "url('/images/Catpaw_Mouse_icon.gif')";
    };

    const handlePointerLeave = () => {
      pointer.style.backgroundImage = "url('/images/Arrow_Mouse_icon.png')";
    };

    const attachPointerListeners = () => {
      const clickableElements = document.querySelectorAll('a, button');
      clickableElements.forEach((element) => {
        element.addEventListener('mouseenter', handlePointerEnter);
        element.addEventListener('mouseleave', handlePointerLeave);
      });
    };

    document.addEventListener('mousemove', updatePointerStyle);
    attachPointerListeners();

    const observer = new MutationObserver(attachPointerListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      // 커서 노드가 DOM에 남아있는 경우에만 제거
      if (pointer.parentNode) {
        document.body.removeChild(pointer);
      }
      document.removeEventListener('mousemove', updatePointerStyle);
      observer.disconnect();
    };
  }, []);

  // 로딩 화면 구현
  const [isGameStart, setIsGameStart] = useState(false); // 게임 시작 여부
  const [isLoading, setIsLoading] = useState(false); // 로딩 상태

  const handleGameStart = () => {
    setIsGameStart(true); // 버튼 클릭 시 게임 시작
    setIsLoading(true); // 로딩 화면 활성화
    setTimeout(() => {
      setIsLoading(false); // 1초 후 로딩 해제
      const pointer = document.querySelector('.customCursor');
      if (pointer) {
        pointer.style.backgroundImage = "url('/images/Arrow_Mouse_icon.png')"; 
      }
    }, 1000);
  };
  if (!isGameStart) {
    // 초기 버튼 화면
    return (
      <div className="startScreen">
        <div className="cloudsWrap">
          <img className="clouds1" src="images/clouds.png" alt="구름 이미지" />
          <img className="clouds2" src="images/clouds.png" alt="구름 이미지" />
        </div>
        <div className="startTitle">
          <h1>
            <img src="images/haejin.png" alt="Haejin's Portfolio" />
          </h1>
        </div>
        <button className="startButton" onClick={handleGameStart}></button>
      </div>
    );
  }
  if (isLoading) {
    // 로딩 화면
    return (
      <div className="loadingScreen"
        style={{  position: 'fixed', top:0, left:0,width:'100%',height:'100%', backgroundColor:'var(--water-blue)',}}
      >
        <div className="loadingClouds">
          <img src="images/clouds_loading.png" alt="구름 이미지" />
        </div>
        <div className="loadingWrap">
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="shadow"></div>
          <div className="shadow"></div>
          <div className="shadow"></div>
          <span>Loading</span>
        </div>
      </div>
    );
  }


  // 메인 콘텐츠
  return (
    <BrowserRouter>
      <div className="overlay"></div>
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contect" element={<Contect />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
