import { Link } from 'react-router-dom';
import '../../styles/commons/ButtonWithLink.scss';

const ButtonWithLink = ({ to, buttonText }) => {
  return (
    <button className='CommonButton'>
      <Link to={to}>{buttonText}</Link>
    </button>
  );
};

export default ButtonWithLink;
