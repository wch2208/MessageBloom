import { useNavigate } from 'react-router-dom';
import '../../styles/commons/ButtonWithLink.scss';

const ButtonWithLink = ({ to, buttonText }) => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate(to);
  };

  return (
    <button className='ButtonWithLink__button' onClick={handleButtonClick}>
      {buttonText}
    </button>
  );
};

export default ButtonWithLink;
