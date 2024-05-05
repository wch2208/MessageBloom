import CustomDropdown from './CustomDropdown';
import { FONTS } from './messageConstants';

export default function FontOptions({ setFormData }) {
  return (
    <div className='message-form__font'>
      <span className='message-form__title'>폰트 선택</span>
      <CustomDropdown props={FONTS} setFormData={setFormData} />
    </div>
  );
}
