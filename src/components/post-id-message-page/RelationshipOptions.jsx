import CustomDropdown from './CustomDropdown';
import { MEMBERS } from './messageConstants';

export default function RelationshipOptions({ setFormData }) {
  return (
    <div className='message-form__relationship'>
      <label htmlFor='select' className='message-form__title'>
        상대와의 관계
      </label>
      <CustomDropdown props={MEMBERS} setFormData={setFormData} />
    </div>
  );
}
