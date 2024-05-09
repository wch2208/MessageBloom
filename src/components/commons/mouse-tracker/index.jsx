import { useEffect, useState } from 'react';

// alpha: 0 ~ 1의 숫자, 숫자가 작을수록 따라오는 이미지가 느려진다
export default function MouseTracker({ imgUrl, alpha = 0.1 }) {
  const [prevMouse, setPrevMouse] = useState({ x: 0, y: 0 });
  const [currentMouse, setCurrentMouse] = useState({ x: 0, y: 0 });

  // lerp(): 선간 보간법 계산 함수
  const lerp = (start, end, alpha) => {
    return start * (1 - alpha) + end * alpha;
  };

  // handleMove함수, 이벤트의 마우스 좌표를 setCurrentMouse로 업데이트한다.
  const handleMove = (e) => {
    setCurrentMouse({ x: e.clientX, y: e.clientY });
  };

  // mousemove 이벤트는 마운트 시 등록, 언마운트 시 제거
  useEffect(() => {
    document.addEventListener('mousemove', handleMove);

    return () => {
      document.removeEventListener('mousemove', handleMove);
    };
  }, []);

  // prevMouse를 currentMouse 위치로 부드럽게 이동시키는 함수
  useEffect(() => {
    const animateMouse = () => {
      const newX = lerp(prevMouse.x, currentMouse.x, alpha);
      const newY = lerp(prevMouse.y, currentMouse.y, alpha);

      setPrevMouse({ x: newX, y: newY });
    };

    let frameId = requestAnimationFrame(animateMouse);

    return () => {
      cancelAnimationFrame(frameId);
    };
  }, [currentMouse]);

  return (
    <div
      style={{
        position: 'fixed',
        left: `${prevMouse.x}px`,
        top: `${prevMouse.y + 30}px`,
        pointerEvents: 'none',
        zIndex: 9999,
      }}>
      💌
    </div>
  );
}
