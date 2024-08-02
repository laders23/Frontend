import "../stylesheets/Common.css";
import "../stylesheets/IndexBody.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";

import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react"; // basic
import "swiper/css"; //basic
import { CommunitySlide, ChatSlide } from "../components/Slide.indexBody";

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
						style={{
							margin: "0",
						}}
					>
						{[...Array(6)].map((_, index) => (
							<SwiperSlide key={index}>
								<CommunitySlide />
							</SwiperSlide>
						))}
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
						style={{
							margin: "0",
						}}
					>
						{[...Array(6)].map((_, index) => (
							<SwiperSlide key={index}>
								<ChatSlide />
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</div>
		</>
	);
}
export default IndexBody;
