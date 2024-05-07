import { forwardRef } from 'react';
import CustomDropdown from './CustomDropdown';
import { MEMBERS } from './messageConstants';

function RelationshipOptions(_, relationshipOptionsRef) {
  return (
    <div className='message-form__relationship'>
      <label htmlFor='select' className='message-form__title'>
        상대와의 관계
      </label>
      <CustomDropdown props={MEMBERS} ref={relationshipOptionsRef} />
    </div>
  );
}

export default forwardRef(RelationshipOptions);
