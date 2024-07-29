import '../stylesheets/Common.css';
import '../stylesheets/Index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot} from "@fortawesome/free-solid-svg-icons";
import {faTag } from "@fortawesome/free-solid-svg-icons";
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import {faCity} from '@fortawesome/free-solid-svg-icons';

import jobLogo from '../images/kakao.png';

import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; 

function Index() {
    return(
        <>
            <div className='adContainer'>
                <div className='adBox'>
                    <div className='selectMatchContainer'>
                        <div className='selectMatchBtn'>
                            <FontAwesomeIcon icon={faTag} />
                            고수 매칭
                        </div>
                        <div className='selectMatchBtn'>
                            <FontAwesomeIcon icon={faCity} />
                            업계별 매칭
                        </div>
                        <div className='selectMatchBtn'>
                            <FontAwesomeIcon icon={faLocationDot} />
                            지역별 매칭
                        </div>
                        <div className='selectMatchBtn'>
                            <FontAwesomeIcon icon={faPaperPlane} />
                            1:1 매칭
                        </div>
                    </div>
                    <div className='gosuIntroContainer'>
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
                            <div className='profileContainer'>
                                <a className='profileLink' href='#'>
                                    <img className='jobLogo' src={jobLogo}/>
                                    <span className='jobDescrip'>
                                        OO기업에서 OO업무를 맡고있는
                                        경력 10년차 OOO입니다
                                    </span>
                                </a>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='profileContainer'>
                                <a className='profileLink' href='#'>
                                    <img className='jobLogo' src={jobLogo}/>
                                    <span className='jobDescrip'>
                                        OO기업에서 OO업무를 맡고있는
                                        경력 10년차 OOO입니다
                                    </span>
                                </a>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='profileContainer'>
                                <a className='profileLink' href='#'>
                                    <img className='jobLogo' src={jobLogo}/>
                                    <span className='jobDescrip'>
                                        OO기업에서 OO업무를 맡고있는
                                        경력 10년차 OOO입니다
                                    </span>
                                </a>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='profileContainer'>
                                <a className='profileLink' href='#'>
                                    <img className='jobLogo' src={jobLogo}/>
                                    <span className='jobDescrip'>
                                        OO기업에서 OO업무를 맡고있는
                                        경력 10년차 OOO입니다
                                    </span>
                                </a>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='profileContainer'>
                                <a className='profileLink' href='#'>
                                    <img className='jobLogo' src={jobLogo}/>
                                    <span className='jobDescrip'>
                                        OO기업에서 OO업무를 맡고있는
                                        경력 10년차 OOO입니다
                                    </span>
                                </a>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='profileContainer'>
                                <a className='profileLink' href='#'>
                                    <img className='jobLogo' src={jobLogo}/>
                                    <span className='jobDescrip'>
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