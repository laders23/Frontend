import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faTag } from "@fortawesome/free-solid-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { faCity } from "@fortawesome/free-solid-svg-icons";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Slide from "../components/Slide.index";
import "../stylesheets/Index.css";

function Index() {
	return (
		<>
			<div className="ad__container">
				<div className="select__match__container">
					<div className="select__match__btn">
						<FontAwesomeIcon icon={faTag} />
						고수 매칭
					</div>
					<div className="select__match__btn">
						<FontAwesomeIcon icon={faCity} />
						업계별 매칭
					</div>
					<div className="select__match__btn">
						<FontAwesomeIcon icon={faLocationDot} />
						지역별 매칭
					</div>
					<div className="select__match__btn">
						<FontAwesomeIcon icon={faPaperPlane} />
						1:1 매칭
					</div>
				</div>
				<Swiper
					modules={[Pagination, Autoplay]}
					autoplay={{ delay: 3000, disableOnInteraction: false }}
					slidesPerView={3}
					pagination={{ clickable: true }}
					// scrollbar={{ draggable: true }}
					style={{
						width: "70%",
						height: "100%",
						margin: "0",
					}}
				>
					{[...Array(6)].map((_, index) => (
						<SwiperSlide
							key={index}
							style={{
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
							}}
						>
							<Slide />
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</>
	);
}

export default Index;
