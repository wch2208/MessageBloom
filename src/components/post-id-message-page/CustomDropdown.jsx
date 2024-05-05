import { useState } from 'react';
import ArrowIcon from '../../assets/icon/ic_arrow_down.svg';
import './CustomDropdown.scss';

export default function CustomDropdown({ props, setFormData }) {
  if (!props || props.length === 0) {
    return <p>No items available</p>; // 아이템이 없을 경우의 처리
  }

  const [selected, setSelected] = useState(props[0].text);
  const [active, setActive] = useState(false);

  const handleChange = (e) => {
    const { innerText } = e.target;
    setSelected(innerText);
    setFormData((prevFormData) => ({ ...prevFormData, font: innerText }));
  };

  const handleToggle = () => {
    setActive(!active);
  };

  return (
    <div className='message-form__inputs' onClick={handleToggle}>
      {selected}
      <img
        className={`message-form__arrow-icon ${active ? 'message-form__arrow-icon--active' : ''}`}
        alt='아래 방향 화살표 아이콘'
        src={ArrowIcon}
      />
      <div
        className={`message-form__drop-down-menu-box ${
          active ? 'message-form__drop-down-menu-box--down' : 'message-form__drop-down-menu-box--up'
        }`}
        onClick={handleChange}>
        {props.map((value) => {
          return (
            <div className='message-form__drop-down-menu' key={value.id}>
              {value.text}
            </div>
          );
        })}
      </div>
    </div>
  );
}
