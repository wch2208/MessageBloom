export const FONTS = [
  { text: 'Noto Sans', id: 1 },
  { text: 'Pretendard', id: 2 },
  { text: '나눔명조', id: 3 },
  { text: '나눔손글씨 손편지체', id: 4 },
];

export const MEMBERS = [
  { text: '지인', id: 1 },
  { text: '친구', id: 2 },
  { text: '동료', id: 3 },
  { text: '가족', id: 4 },
];

export const PROFILES = [
  {
    src: 'https://cdn.pixabay.com/photo/2020/06/21/06/00/bohemian-5323332_640.png',
    alt: '프로필 이미지',
  },
  {
    src: 'https://cdn.pixabay.com/photo/2017/12/25/22/52/tiger-3039280_640.jpg',
    alt: '프로필 이미지',
  },
  {
    src: 'https://cdn.pixabay.com/photo/2017/01/31/15/12/avatar-2024924_640.png',
    alt: '프로필 이미지',
  },
  {
    src: 'https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359554_640.png',
    alt: '프로필 이미지',
  },
  {
    src: 'https://cdn.pixabay.com/photo/2012/04/13/21/07/user-33638_640.png',
    alt: '프로필 이미지',
  },
  {
    src: 'https://cdn.pixabay.com/photo/2014/03/25/16/24/female-296990_640.png',
    alt: '프로필 이미지',
  },
  {
    src: 'https://cdn.pixabay.com/photo/2020/10/11/19/51/cat-5646889_640.jpg',
    alt: '프로필 이미지',
  },
  {
    src: 'https://cdn.pixabay.com/photo/2016/03/31/19/58/avatar-1295429_640.png',
    alt: '프로필 이미지',
  },
  {
    src: 'https://cdn.pixabay.com/photo/2016/08/16/03/23/blue-popeyes-1597028_640.png',
    alt: '프로필 이미지',
  },
  {
    src: 'https://cdn.pixabay.com/photo/2022/09/06/20/31/profile-pic-7437435_640.png',
    alt: '프로필 이미지',
  },
];

export const getFormDataInit = (
  id,
  senderInputRef,
  profileOptionsRef,
  relationshipOptionsRef,
  contentTextareaRef,
  fontOptionsRef,
) => ({
  team: '6-6',
  recipientId: id,
  sender: senderInputRef.current,
  profileImageURL: profileOptionsRef.current.value || PROFILES[0].src,
  relationship: relationshipOptionsRef.current || MEMBERS[0].text,
  content: contentTextareaRef.current,
  font: fontOptionsRef.current || FONTS[0].text,
});
