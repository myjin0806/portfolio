import React, { useEffect } from 'react';
import { Engine, Render, World, Bodies, MouseConstraint, Mouse, Events } from 'matter-js';

const Index1Content = () => {
  useEffect(() => {
    function initSimulation() {
      const engine = Engine.create(),
        world = engine.world;

      const containerElement = document.querySelector(".tag-canvas");
      if (!containerElement) return; // containerElement가 없으면 리턴

      const containerWidth = containerElement.clientWidth;
      const containerHeight = containerElement.clientHeight;

      const render = Render.create({
        element: containerElement,
        engine: engine,
        options: {
          width: containerWidth,
          height: containerHeight,
          background: "transparent",
          wireframes: false,
        },
      });

      Render.run(render);
      Engine.run(engine);

      const ground = Bodies.rectangle(containerWidth / 2, containerHeight + 50, containerWidth, 100, { isStatic: true });
      const wallLeft = Bodies.rectangle(-50, containerHeight / 2, 100, containerHeight, { isStatic: true });
      const wallRight = Bodies.rectangle(containerWidth + 50, containerHeight / 2, 100, containerHeight, { isStatic: true });
      const roof = Bodies.rectangle(containerWidth / 2, -50, containerWidth, 100, { isStatic: true });

      World.add(world, [ground, wallLeft, wallRight, roof]);

      const tags = document.querySelectorAll(".tag");
      const tagBodies = Array.from(tags).map((tag) => {
        const width = tag.offsetWidth;
        const height = tag.offsetHeight;

        const x = Math.random() * (containerWidth - width) + width / 2;
        const y = Math.random() * containerHeight;

        const body = Bodies.rectangle(x, y, width, height, {
          chamfer: { radius: height / 2 },
          density: 0.01,
          friction: 0.1,
          restitution: 0.8,
          render: {
            fillStyle: "transparent",
          },
        });

        World.add(world, body);
        return { body, element: tag };
      });

      Events.on(engine, "afterUpdate", () => {
        tagBodies.forEach(({ body, element }) => {
          const { x, y } = body.position;
          element.style.transform = `translate(-50%, -50%) translate(${x}px, ${y}px) rotate(${body.angle}rad)`;
        });
      });

      const mouse = Mouse.create(render.canvas);
      const mouseConstraint = MouseConstraint.create(engine, {
        mouse: mouse,
        constraint: { stiffness: 0.2 },
      });

      World.add(world, mouseConstraint);

      render.mouse = mouse; // 마우스 이벤트 처리

      window.addEventListener("resize", () => {
        render.canvas.width = containerElement.clientWidth;
        render.canvas.height = containerElement.clientHeight;
        render.options.width = containerElement.clientWidth;
        render.options.height = containerElement.clientHeight;
      });
    }

    const containerElement = document.querySelector(".tag-canvas");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          initSimulation();
        }
      });
    });

    if (containerElement) {
      observer.observe(containerElement);
    }

    return () => {
      if (containerElement) {
        observer.unobserve(containerElement);
      }
    };
  }, []);

  return (
    <div className='pages'>
      {/* page 1 */}
      <div className='page01 page'>
        <div className="profileWrap">
          <img src="images/profile.png" alt="" />
          <p>
            <h3>안녕하세요!</h3>
            프론트엔드 개발자가 되고싶은 김해진입니다.<br />
            시간을 내어 제 포트폴리오를 봐주셔서<br />
            감사합니다.
          </p>
          <div className='tag-canvas'>
            <div className="tag big">#창의적</div>
            <div className="tag big">#감성적</div>
            <div className="tag big">#이해심많은</div>
            <div className="tag">#아이디어</div>
            <div className="tag">#열정적</div>
            <div className="tag">#꼼꼼한</div>
            <div className="tag">#진지한</div>
            <div className="tag">#낭만적인</div>
            <div className="tag">#호기심</div>
            <div className="tag">#신념</div>
            <div className="tag">#가치</div>
          </div>
        </div>
      </div>
      {/* page 2 */}
      <div className='page02 page'>
        <div>
          <div className="btnImg">
            <img src="images/button.png" alt="버튼" />
            <span className='btnTitle'>education</span>
          </div>
          <ul className='page02List'>
            <li>ㅇㅇ</li>
            <li>ㅇㅇ</li>
          </ul>
        </div>
        <div>
          <div className="btnImg">
            <img src="images/button.png" alt="버튼" />
            <span className='btnTitle'>certificate</span>
          </div>
          <ul className='page02List'>
            <li>ㅎㅇ</li>
            <li>ㅎㅇ</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Index1Content;
