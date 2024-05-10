export default function getFontByData(font) {
  switch (font) {
    case '나눔명조':
      return 'NanumMyengjo';
    case 'Pretendard':
      return 'pretendard';
    case 'Noto Sans':
      return 'Noto-Sans';
    case '나눔손글씨 손편지체':
      return 'NanumSonPyeonJiCe';
  }
}
