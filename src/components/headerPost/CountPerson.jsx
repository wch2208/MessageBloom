import React from 'react';
import '../../styles/headerPost/CountPerson.scss';
import profileimg1 from '../../assets/image/profile/img_profile_01.svg';
import profileimg2 from '../../assets/image/profile/img_profile_02.svg';

//삭제예정
const profiles = [
  {
    id: 'profile1',
    src: profileimg1,
    alt: '이미지',
    createAt: '2024-05-01',
  },
  {
    id: 'profile2',
    src: profileimg1,
    alt: '이미지',
    createAt: '2024-05-05',
  },
  {
    id: 'profile3',
    src: profileimg2,
    alt: '이미지',
    createAt: '2024-04-01',
  },
  {
    id: 'profile4',
    src: profileimg2,
    alt: '이미지',
    createAt: '2024-06-01',
  },
  {
    id: 'profile5',
    src: profileimg1,
    alt: '이미지',
    createAt: '2024-05-15',
  },
  {
    id: 'profile6',
    src: profileimg2,
    alt: '이미지',
    createAt: '2024-03-01',
  },
  {
    id: 'profile6',
    src: profileimg2,
    alt: '이미지',
    createAt: '2024-08-01',
  },
];

export default function CountPerson() {
  const sortedProfiles = profiles.sort((a, b) => new Date(b.createAt) - new Date(a.createAt));
  const profileCount = sortedProfiles.length;

  return (
    <div className='headerPost__profile-container'>
      <div className='headerPost__profile-img'>
        {sortedProfiles.slice(0, 3).map((profile) => (
          <div key={profile.id}>
            <img src={profile.src} alt={profile.alt} className='headerPost__profile-size' />
          </div>
        ))}
        <div className='headerPost__profile-restcount'>
          {profileCount > 3 && <div>+{profileCount - 3}</div>}
        </div>
      </div>
      <div className='headerPost__profile-totalcount'>
        <span className='headerPost__profile-count'>{profileCount}</span>명이 작성했어요!
      </div>
    </div>
  );
}
