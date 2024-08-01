import "../stylesheets/Common.css";
import "../stylesheets/IndexBody.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";

import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react"; // basic
import "swiper/css"; //basic

import { Link } from "react-router-dom";

function IndexBody() {
	return (
		<>
			<div className="commu__container">
				<div className="commu__title__box">
					<div className="commu__title">
						<span>커뮤니티</span>
						{/* <span></span>  옵션자리 */}
					</div>
					<div className="commu__link">
						<a href="#">
							바로가기
							<FontAwesomeIcon icon={faCaretRight} />
						</a>
					</div>
				</div>
				<div className="commu__post__box">
					<Swiper
						spaceBetween={0} /* 슬라이드 간의 간격 조정 */
						slidesPerView={3} /* 화면에 보일 슬라이드 수 설정 */
						navigation
						modules={[Navigation]}
					>
						<SwiperSlide>
							<div className="post__container">
								<div className="post__text">
									오늘 회사에서 직속선배랑 같이 밥을 먹는데 제가 소심한
									성격이라서 말을 잘 못걸겠습니다. 이럴때 아이스 브레이킹을 하는
									방법 좀 알려주세요ㅠㅠ
								</div>
								<div className="post__info">
									<div className="post__age">20대</div>
									<div className="post__company">NAVER</div>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="post__container">
								<div className="post__text">
									현재 컴퓨터 개발 업계에서 종사하고 있는 3년차 개발자 입니다.
									많은 것들을 배우고 있지만 미래에 대해서 아직까지 확신이 없는
									상태입니다. 만나서 고민상담 해주실 인생 선배님 찾습니다.
								</div>
								<div className="post__info">
									<div className="post__age">20대</div>
									<div className="post__company">KAKAO</div>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="post__container">
								<div className="post__text">
									오늘 회사에서 직속선배랑 같이 밥을 먹는데 제가 소심한
									성격이라서 말을 잘 못걸겠습니다. 이럴때 아이스 브레이킹을 하는
									방법 좀 알려주세요ㅠㅠ
								</div>
								<div className="post__info">
									<div className="post__age">20대</div>
									<div className="post__company">우아한형제들</div>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="post__container">
								<div className="post__text">
									오늘 회사에서 직속선배랑 같이 밥을 먹는데 제가 소심한
									성격이라서 말을 잘 못걸겠습니다. 이럴때 아이스 브레이킹을 하는
									방법 좀 알려주세요ㅠㅠ
								</div>
								<div className="post__info">
									<div className="post__age">20대</div>
									<div className="post__company">NAVER</div>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="post__container">
								<div className="post__text">
									오늘 회사에서 직속선배랑 같이 밥을 먹는데 제가 소심한
									성격이라서 말을 잘 못걸겠습니다. 이럴때 아이스 브레이킹을 하는
									방법 좀 알려주세요ㅠㅠ
								</div>
								<div className="post__info">
									<div className="post__age">20대</div>
									<div className="post__company">NAVER</div>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="post__container">
								<div className="post__text">
									오늘 회사에서 직속선배랑 같이 밥을 먹는데 제가 소심한
									성격이라서 말을 잘 못걸겠습니다. 이럴때 아이스 브레이킹을 하는
									방법 좀 알려주세요ㅠㅠ
								</div>
								<div className="post__info">
									<div className="post__age">20대</div>
									<div className="post__company">NAVER</div>
								</div>
							</div>
						</SwiperSlide>
					</Swiper>
				</div>
			</div>
			<div className="chat__container">
				<div className="chat__title__box">
					<div className="chat__title">
						<span>
							인생선배님과 대화하고 싶은사람?
							<span> 오픈 채팅</span>
						</span>
					</div>
					<div className="chat__link">
						<a href="/OpenChat">
							바로가기
							<FontAwesomeIcon icon={faCaretRight} />
						</a>
					</div>
				</div>
				<div className="chat__room__box">
					<Swiper
						spaceBetween={0} /* 슬라이드 간의 간격 조정 */
						slidesPerView={3} /* 화면에 보일 슬라이드 수 설정 */
						navigation
						modules={[Navigation]}
					>
						<SwiperSlide>
							<div className="chat__room__container">
								<div className="chat__room__title">개발 토론하실분~</div>
								<div className="chat__text">
									저희 방은 컴퓨터 개발업계에서 종사하고 있는 사람들이 모여 있는
									방입니다.
								</div>
								<div className="chat__btn__box">
									<div className="people__num">
										<span>15명 / 70명</span>
									</div>
									<div className="chat__btn">입장하기</div>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="chat__room__container">
								<div className="chat__room__title">금융 관련 정보 공유방</div>
								<div className="chat__text">
									저희 방은 금융/경제 관련 정보 공유를 하는 방입니다.
								</div>
								<div className="chat__btn__box">
									<div className="people__num">
										<span>10명 / 70명</span>
									</div>
									<div className="chat__btn">입장하기</div>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="chat__room__container">
								<div className="chat__room__title">노동업계 정보 공유방</div>
								<div className="chat__text">
									저희 방은 컴퓨터 개발업계에서 종사하고 있는 사람들이 모여 있는
									방입니다.
								</div>
								<div className="chat__btn__box">
									<div className="people__num">
										<span>25명 / 70명</span>
									</div>
									<div className="chat__btn">입장하기</div>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="chat__room__container">
								<div className="chat__room__title">개발 토론하실분~</div>
								<div className="chat__text">
									저희 방은 컴퓨터 개발업계에서 종사하고 있는 사람들이 모여 있는
									방입니다.
								</div>
								<div className="chat__btn__box">
									<div className="people__num">
										<span>15 / 70명</span>
									</div>
									<div className="chat__btn">입장하기</div>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="chat__room__container">
								<div className="chat__room__title">개발 토론하실분~</div>
								<div className="chat__text">
									저희 방은 컴퓨터 개발업계에서 종사하고 있는 사람들이 모여 있는
									방입니다.
								</div>
								<div className="chat__btn__box">
									<div className="people__num">
										<span>15 / 70명</span>
									</div>
									<div className="chat__btn">입장하기</div>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="chat__room__container">
								<div className="chat__room__title">개발 토론하실분~</div>
								<div className="chat__text">
									저희 방은 컴퓨터 개발업계에서 종사하고 있는 사람들이 모여 있는
									방입니다.
								</div>
								<div className="chat__btn__box">
									<div className="people__num">
										<span>15 / 70명</span>
									</div>
									<div className="chat__btn">입장하기</div>
								</div>
							</div>
						</SwiperSlide>
					</Swiper>
				</div>
			</div>
		</>
	);
}
export default IndexBody;
