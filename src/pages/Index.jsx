import '../stylesheets/Common.css';
import '../stylesheets/Index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot} from "@fortawesome/free-solid-svg-icons";
import {faTag } from "@fortawesome/free-solid-svg-icons";
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import {faCity} from '@fortawesome/free-solid-svg-icons';

import job__logo from '../images/kakao.png';

import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; 

function Index() {
    return(
        <>
            <div className='ad__container'>
                <div className='ad__box'>
                    <div className='select__match__container'>
                        <div className='select__match__btn'>
                            <FontAwesomeIcon icon={faTag} />
                            고수 매칭
                        </div>
                        <div className='select__match__btn'>
                            <FontAwesomeIcon icon={faCity} />
                            업계별 매칭
                        </div>
                        <div className='select__match__btn'>
                            <FontAwesomeIcon icon={faLocationDot} />
                            지역별 매칭
                        </div>
                        <div className='select__match__btn'>
                            <FontAwesomeIcon icon={faPaperPlane} />
                            1:1 매칭
                        </div>
                    </div>
                    <div className='gosu__intro__container'>
                    <Swiper
                        modules={[Navigation, Pagination]} // Autoplay
                        // autoplay={{ delay: 2000, disableOnInteraction: false }}
                        spaceBetween={0}
                        slidesPerView={3}
                        navigation
                        // pagination={{ clickable: true }}
                        
                        scrollbar={{ draggable: true }}
                    >
                        <SwiperSlide>
                            <div className='profile__container'>
                                <a className='profile__link' href='#'>
                                    <img className='job__logo' src={job__logo}/>
                                    <span className='job__descrip'>
                                        OO기업에서 OO업무를 맡고있는
                                        경력 10년차 OOO입니다
                                    </span>
                                </a>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='profile__container'>
                                <a className='profile__link' href='#'>
                                    <img className='job__logo' src={job__logo}/>
                                    <span className='job__descrip'>
                                        OO기업에서 OO업무를 맡고있는
                                        경력 10년차 OOO입니다
                                    </span>
                                </a>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='profile__container'>
                                <a className='profile__link' href='#'>
                                    <img className='job__logo' src={job__logo}/>
                                    <span className='job__descrip'>
                                        OO기업에서 OO업무를 맡고있는
                                        경력 10년차 OOO입니다
                                    </span>
                                </a>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='profile__container'>
                                <a className='profile__link' href='#'>
                                    <img className='job__logo' src={job__logo}/>
                                    <span className='job__descrip'>
                                        OO기업에서 OO업무를 맡고있는
                                        경력 10년차 OOO입니다
                                    </span>
                                </a>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='profile__container'>
                                <a className='profile__link' href='#'>
                                    <img className='job__logo' src={job__logo}/>
                                    <span className='job__descrip'>
                                        OO기업에서 OO업무를 맡고있는
                                        경력 10년차 OOO입니다
                                    </span>
                                </a>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='profile__container'>
                                <a className='profile__link' href='#'>
                                    <img className='job__logo' src={job__logo}/>
                                    <span className='job__descrip'>
                                        OO기업에서 OO업무를 맡고있는
                                        경력 10년차 OOO입니다
                                    </span>
                                </a>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Index;