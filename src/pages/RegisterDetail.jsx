import { useEffect } from "react";

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
        // 아래 부분은 회원가입시 input창 미입력시 처리 로직입니다.
        const form = window.document.querySelector('.register__detail__form');
        const regDetailInput = form.querySelectorAll('.reg__detail__input');
        const regEmailInput = form.querySelector('.reg__email__input');
        const compRegBtn = window.document.querySelector('.comp__reg__btn');

        const regexPatterns = { // 정규식 모음집
            id: /^[A-Za-z]{4,20}$/,
            password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/,
            name: /^[가-힣]+$/,
            birth: /^(19[0-9][0-9]|20\d{2})-(0[0-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/,
            email: /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]+$/
        };

        const warningMessages = {   // 정규식에 어긋난 경우, 표시되는 warning 모음집
            id: '아이디는 4자 이상 20자 이하의 대소문자로 시작하는 조합입니다',
            password: '비밀번호를 형식에 맞게 작성해주세요',
            name: '이름은 한글로 입력해주세요',
            birth: '생년월일 8자리를 정확히 입력해주세요',
            email: '이메일 형식을 확인하세요'
        };

        const warningSpaceMessages = {  // input창 빈값일 경우, 표시되는 warning 모음집
            id: '아이디를 입력해주세요',
            password : '비밀번호를 입력해주세요',
            name : '이름을 입력해주세요',
            birth : '생년월일을 입력해주세요',
            email : '이메일을 입력해주세요'
        }

        const checkSpaceInput = (input) => {    // input 빈공백 확인 하는 함수
            const name = input.name;
            const warningElement = form.querySelector(`[rel="warning__${name}"]`);
            if (input.value === '') {
                input.style.borderColor = "#d64141";
                warningElement.innerText = warningSpaceMessages[name];
                return false;
            } else {
                input.style.borderColor = "#475067";
                warningElement.innerText = '';
                return true;
            }
        }

        const checkRegexInput = (input) => {    // input 정규식 확인 하는 함수
            const name = input.name;
            const warningElement = form.querySelector(`[rel="warning__${name}"]`);
            const regex = regexPatterns[name];
            if (!regex.test(input.value)) {
                input.style.borderColor = "#d64141";
                warningElement.innerText = warningMessages[name];
                return false;
            } else {
                input.style.borderColor = "#475067";
                warningElement.innerText = '';
                return true;
            }
        }

        regEmailInput.addEventListener('input' , () => {
            if (regEmailInput.value !== '') {
                form.querySelector('[rel="cert__btn"]').classList.add('enabled');
                form.querySelector('[rel="cert__btn"]').disabled = false;
                form.querySelector('[rel="comp__btn"]').classList.add('enabled');
            form.querySelector('[rel="comp__btn"]').disabled = false;
            } else {
                form.querySelector('[rel="cert__btn"]').classList.remove('enabled');
                form.querySelector('[rel="cert__btn"]').disabled = true;
                form.querySelector('[rel="comp__btn"]').classList.remove('enabled');
            form.querySelector('[rel="comp__btn"]').disabled = true;
            }
        })
        
        
       
        
        form.querySelector('[rel="comp__btn"]').addEventListener('click', () => {
            let isValid = true;
            regDetailInput.forEach(input => {
                if (!checkSpaceInput(input) || !checkRegexInput(input)) {
                    isValid = false;
                }
            });
        
            if (!checkSpaceInput(regEmailInput) || !checkRegexInput(regEmailInput)) {
                isValid = false;
            }
        
            if (isValid) {
                alert('회원가입에 성공하였습니다.');
            }
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
                        <div className="warning-alert" rel="warning__id"></div>  
                    </label>
                    <label className='reg__input__label'>
                        <span className='reg__label__title'>비밀번호</span>
                        <input className='reg__detail__input' type='password' name='password' placeholder='8~16자리/영문 대소문자, 숫자, 특수문자 조합' />
                        <div className="warning-alert" rel="warning__password"></div>
                    </label>
                    <label className='reg__input__label'>
                        <span className='reg__label__title'>이름</span>
                        <input className='reg__detail__input' type='text' name='name' placeholder='이름 입력' />
                        <div className="warning-alert" rel="warning__name"></div>
                    </label>
                    <label className='reg__input__label'>
                        <span className='reg__label__title'>생년월일</span>
                        <input className='reg__detail__input' type='text' name='birth' placeholder='YYYYMMDD' />
                        <div className="warning-alert" rel="warning__birth"></div>
                    </label>
                    <label className='reg__input__label'>
                        <span className='reg__label__title'>이메일</span>
                        <input className='reg__detail__input reg__email__input' type='text' name='email' placeholder='email@meetpro.co.kr' />
                        <div className="warning-alert" rel="warning__email"></div>
                    </label>
                    <div className='cert__reg__btn disabled' rel="cert__btn">인증요청</div>
                    <div className='comp__reg__btn' rel="comp__btn">회원가입 완료</div>
                </div>
            </form>
        </>
    )
    
}


export default RegisterDetail;