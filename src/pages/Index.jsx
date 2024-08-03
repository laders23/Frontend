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
import { useEffect, useState } from "react";

function Index() {
	const [proData, setProData] = useState([]);

	useEffect(() => {
		fetch("/cache/pro.json")
			.then((response) => {
				if (!response.ok) {
					throw new Error("네트워크 문제");
				}

				return response.json();
			})
			.then((cachingData) => {
				setProData((prev) => [...prev, ...cachingData]);
			})
			.catch((error) => {
				throw new Error(`데이터 fetching 실패 : ${error}`);
			});
	}, []);

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
				{proData.length > 0 ? (
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
						{proData.map((data, index) => (
							<SwiperSlide
								key={index}
								style={{
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
								}}
							>
								<Slide proProfile={data} />
							</SwiperSlide>
						))}
					</Swiper>
				) : null}
			</div>
		</>
	);
}

export default Index;
