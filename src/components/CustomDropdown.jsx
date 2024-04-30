import { useState } from 'react';
import ArrowIcon from '../assets/icon/ic_arrow_down.svg';

export default function CustomDropdown({ props }) {
  if (!props || props.length === 0) {
    return <p>No items available</p>; // 아이템이 없을 경우의 처리
  }

  const [selected, setSelected] = useState(props[0].text);
  const [active, setActive] = useState(false);

  const handleChange = (e) => {
    const { innerText } = e.target;
    setSelected(innerText);
  };

  const handleToggle = () => {
    setActive(!active);
  };

  return (
    <div className='message-form__inputs' onClick={handleToggle}>
      {selected}
      <img src={ArrowIcon} />
      <div
        className={`message-form__drop-down-menu-box ${
          active ? 'message-form__drop-down-menu-box--active' : ''
        }`}
        onClick={handleChange}>
        {props.map((item) => {
          return (
            <div className='message-form__drop-down-menu' key={item.id}>
              {item.text}
            </div>
          );
        })}
      </div>
    </div>
  );
}
