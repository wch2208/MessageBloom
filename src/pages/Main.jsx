import '../styles/main/main.scss'
import section01 from '../assets/main/section01.svg'
import section02 from '../assets/main/section02.png'

export default function Main() {
  return (
    <div className='alignment'>
      <section className='section1'>
        <div className='text-box'>
          <p className='point-btn'>Point. 01</p>
          <h2>누구나 손쉽게, 온라인 롤링 페이퍼를 만들 수 있어요</h2>
          <p className='description'>로그인 없이 자유롭게 만들어요.</p>
        </div>
        <div>
          <img src={section01} alt='롤링페이퍼 예시 사진' className='img' />
        </div>
      </section>
      <section className='section2'>
        <div className='text-box'>
          <p className='point-btn'>Point. 02</p>
          <h2>서로에게 이모지로 감정을 표현해보세요</h2>
          <p className='description'>롤링 페이퍼에 이모지를 추가할 수 있어요.</p>
        </div>
        <div>
          <img src={section02} alt='이모지 추가 예시 사진' className='img2' />
        </div>
      </section>
      <div className='btn-container'>
        <p className='btn'>구경해보기</p>
      </div>
    </div>
  )
}
