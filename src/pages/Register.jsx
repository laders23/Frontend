import "../stylesheets/Common.css";
import "../stylesheets/Register.css";
import kakaoLogo from "../images/kakao-logo.svg";
import googleLogo from "../images/google-logo.svg";
import naverLogo from "../images/naver-logo.svg";

import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function Register() {
	return (
		<>
			<div className="reg__all__container">
				<div className="register__container">
					<div className="register__box">
						<div className="register__item">
							<div className="reg__item__title">
								<span>개인회원</span>
							</div>
							<div className="meetpro__register__btn">
								<a href="/registerDetail">MeetPro 아이디 만들기</a>
							</div>
							<div className="reg__social__line__box">
								<div className="social__line"></div>
								<div className="line__title">소셜 계정으로 간편 가입 하기</div>
								<div className="social__line"></div>
							</div>
							<div className="social__logo__container">
								<div>
									<img className="category__logo" src={kakaoLogo} />
								</div>
								<div>
									<img className="category__logo" src={googleLogo} />
								</div>
								<div>
									<img className="category__logo" src={naverLogo} />
								</div>
							</div>
							<div className="exist__login__box">
								<span className="exist__login">
									이미 계정이 있나요?
									<a className="login__btn" href="#">
										로그인
									</a>
								</span>
							</div>
						</div>
					</div>
					<div className="ad__box">
						<Swiper
							spaceBetween={50} /* 슬라이드 간의 간격 조정 */
							slidesPerView={1} /* 화면에 보일 슬라이드 수 설정 */
							navigation
							pagination={{ clickable: true }}
							autoplay={{ delay: 2000, disableOnInteraction: true }}
							loop={true}
							modules={[Navigation, Pagination, Autoplay]}
							className="weekly-food-slide"
						>
							<SwiperSlide>
								<div className="ad__slide__container">
									<div className="ad__big__title">
										<span>
											<span>업계별 숨은 고수</span>
											들과
										</span>
										<span>고민상담을 할수 있습니다!</span>
									</div>
									<div className="ad__sub__title">
										<span>업계와 지역, 나이를 선택하고</span>
										<span>같은 업계 종사자들과 편안한 만남을 가지세요</span>
									</div>
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div className="ad__slide__container">
									<div className="ad__big__title">
										<span>
											<span>오픈채팅방</span>을 통해서
										</span>
										<span>많은사람들과 정보를 공유할 수 있습니다!</span>
									</div>
									<div className="ad__sub__title">
										<span>자신이 속한 업계의 채팅방에 입장해서</span>
										<span>다양한 직군의 업계 종사자들과 토론을 해보세요</span>
									</div>
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div className="ad__slide__container">
									<div className="ad__big__title">
										<span>
											<span>커뮤니티</span>를 활용하여
										</span>
										<span>하루의 일과를 마무리 할 수 있습니다!</span>
									</div>
									<div className="ad__sub__title">
										<span>하루동안 일어난 다양한 상황들을</span>
										<span>커뮤니티를 통해 많은 사람들과 공유해보세요</span>
									</div>
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div className="ad__slide__container">
									<div className="ad__big__title">
										<span>
											<span>자신의 경력</span>을 통해서
										</span>
										<span>누군가의 멘토가 될 수 있습니다!</span>
									</div>
									<div className="ad__sub__title">
										<span>나보다 경력이 적은 사람들에게</span>
										<span>
											자신만의 노하우를 통해 회사생활의 힘이 되어주세요
										</span>
									</div>
								</div>
							</SwiperSlide>
						</Swiper>
					</div>
				</div>
			</div>
		</>
	);
}

export default Register;
