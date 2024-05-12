import { useEffect, useState, useRef } from 'react';
import { throttle } from 'lodash';

// alpha: 0 ~ 1의 숫자, 0은 이전 마우스 위치, 1은 현재 마우스 위치, 숫자가 작을수록 따라오는 이미지가 느려진다
export default function MouseTracker({ text, imgUrl, children, alpha = 1 }) {
  // 초기값을 대상 요소의 크기 기준으로 배치하면 기본 디자인 중 일부가 갑자기 움직이는 반전을 기대할 수 있을 것 같다
  const [prevMouse, setPrevMouse] = useState({ x: 210, y: 10 });
  const targetRef = useRef(null);

  // lerp(): 선간 보간법 계산 함수, 이전 위치와 현재 위치의 중간 위치를 계산
  // 이 함수를 사용한 장점: 부드러운 움직임, 약간 떨어뜨려놓아서 마우스를 가리지 않음
  const lerp = (start, end, alpha) => {
    return start * (1 - alpha) + end * alpha;
  };

  const handleMove = throttle((e) => {
    //현재 마우스 위치
    const rect = targetRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left; // 요소 내의 상대 X 좌표
    const y = e.clientY - rect.top; // 요소 내의 상대 Y 좌표

    const newX = lerp(prevMouse.x, x, alpha);
    const newY = lerp(prevMouse.y, y, alpha);

    setPrevMouse({ x: newX, y: newY });
  }, 100);

  useEffect(() => {
    const targetEl = targetRef.current;
    targetEl.addEventListener('mousemove', handleMove);

    return () => {
      targetEl.removeEventListener('mousemove', handleMove);
      handleMove.cancel(); //throttle를 구현한 lodash의 메서드
    };
  }, []);

  const trackerStyles = {
    position: 'absolute',
    left: `${prevMouse.x}px`,
    top: `${prevMouse.y}px`,
    pointerEvents: 'none',
    zIndex: 9999,
    backgroundImage: `url(${imgUrl})`,
  };

  return (
    <div style={{ position: 'relative', width: '100%' }} ref={targetRef}>
      {children}
      <div style={trackerStyles}>{text}</div>
    </div>
  );
}
