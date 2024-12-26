import React, { useState, useEffect , useMemo } from 'react';

const Home = () => {
  const textArr = useMemo(() => [
    "안녕!",
    "만나서 반가워!",
    "오른쪽의 아이콘을 클릭해봐!",
    "좋은 하루 보내!",
    "멋진 시간이 될 거야!",
    "방문해줘서 고마워!",
    "어서 와! 기다리고 있었어!"
  ], []); // 빈 배열을 의존성 배열로 넣어 한 번만 계산되게 함

  const [displayText, setDisplayText] = useState(""); 
  const [isTyping, setIsTyping] = useState(true); 
  const [textIdx, setTextIdx] = useState(0); 
  const [idx, setIdx] = useState(0);
  const speed = 150;
  const [isFirstRender, setIsFirstRender] = useState(true);  // 처음 렌더링 구분
  const [isMobile,setIsMobile ] = useState(window.innerWidth<=480);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 480);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      let text = textArr[textIdx];
      
      if (isFirstRender) {
        setIsFirstRender(false); // 첫 렌더링 후 1초 지연
      }
      
      if (isTyping) {
        // 글자 추가
        if (idx < text.length) {
          setDisplayText((prev) => prev + text.charAt(idx));
          setIdx((prev) => prev + 1);
        } else {
          setIsTyping(false);
        }
      } else {
        // 글자 삭제
        if (idx > 0) {
          setDisplayText((prev) => prev.slice(0, -1));
          setIdx((prev) => prev - 1);
        } else {
          setIsTyping(true);
          setTextIdx((prev) => (prev + 1) % textArr.length);
        }
      }
    }, isFirstRender ? 1000 : (isTyping ? speed : speed / 1.5));  // 첫 렌더링만 1초 지연

    return () => clearTimeout(timeout); 
  }, [isTyping, idx, textIdx, textArr, isFirstRender]);

  return (
    <div className="home jouralLayout">
      <div className="imgBox">
        <img src="images/gif_chest.gif" alt="gif_chest" className="gifChest" />
        <img src="images/gif_cow.gif" alt="gif_cow" className="gifCow" />
        <img src="images/gif_babycow.gif" alt="gifBabycow" className="gifBabyCow" />
        <img src="images/gif_boat.gif" alt="gif_boat" className="gifBoat" />
        <img src="images/gif_teemo_dance.gif" alt="gif_teemo_dance" className="gifTeemoDance" />
      </div>
      {isMobile? (
        <div className="mobileTextBox">
          <img src="images/dialog_box_mobile.png" alt="모바일 텍스트 상자"></img>
          <img src="images/gif_teemo_happy2.gif" alt="티모 얼굴" className="mobileTeemoFace" />
          <span className="mobileText">안녕!<br/>만나서 반가워!</span>
        </div>
      ):(
        <div className="textBox">
          <img src="images/gif_teemo_happy2.gif" alt="티모 얼굴" className="teemoFace" />
          <span id="mainText">{displayText}|</span>
        </div>
      )}
    </div>
  );
};

export default Home;