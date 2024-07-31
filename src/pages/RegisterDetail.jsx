import { useEffect , useRef } from "react";

import RegisterHeader from '../components/RegisterHeader';

import '../stylesheets/Common.css';
import '../stylesheets/RegisterDetail.css';

import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; 



function RegisterDetail() {
    useEffect(() => {
        const test = window.document.querySelector('.cert__reg__btn');
        test.addEventListener('click', () => {
            console.log(test);
        })
      },[]);
    return(
        <>
            <RegisterHeader />
            <form className='register__detail__form'>
                <div className='reg__detail__box'>
                    <span className='reg__detail__title'>회원가입</span>
                    <div className='reg__detail__swiper'>
                        <Swiper
                            spaceBetween={50} /* 슬라이드 간의 간격 조정 */
                            slidesPerView={1} /* 화면에 보일 슬라이드 수 설정 */
                            navigation
                            modules={[Navigation, Pagination, Autoplay]}
                            autoplay={{delay: 2500, disableOnInteraction: true }}
                            loop={true}
                            speed={2500}
                        >
                            <SwiperSlide className='reg__detail__slide'>
                                나의 온라인 선배 찾기, MeetPro
                            </SwiperSlide>
                            <SwiperSlide className='reg__detail__slide'>
                                커뮤니티를 통해 다양한 정보를 공유하세요!
                            </SwiperSlide>
                            <SwiperSlide className='reg__detail__slide'>
                                번아웃을 극복할 의지만 있으면 됩니다!
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <label className='reg__input__label'>
                        <span className='reg__label__title'>아이디</span>
                        <input className='reg__detail__input' type='text' name='id' placeholder='4~20자리 / 영문, 숫자 가능, 특수문자 불가능'/>    
                    </label> 
                    <label className='reg__input__label'>
                        <span className='reg__label__title'>비밀번호</span>
                        <input className='reg__detail__input' type='password' name='password' placeholder='8~16자리/영문 대소문자, 숫자, 특수문자 조합' />
                    </label>
                    <label className='reg__input__label'>
                        <span className='reg__label__title'>이름</span>
                        <input className='reg__detail__input' type='text' name='name' placeholder='이름 입력' />
                    </label>
                    <label className='reg__input__label'>
                        <span className='reg__label__title'>생년월일</span>
                        <input className='reg__detail__input' type='text' name='birth' placeholder='YYYYMMDD' />
                    </label>
                    <label className='reg__input__label'>
                        <span className='reg__label__title'>이메일</span>
                        <input className='reg__detail__input' type='text' name='email' placeholder='email@meetpro.co.kr' />
                    </label>
                    <div className='cert__reg__btn'>인증요청</div>
                    <div className='comp__reg__btn'>회원가입 완료</div>
                </div>
            </form>
        </>
    )
    
}


export default RegisterDetail;