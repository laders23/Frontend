/* eslint-disable react/prop-types */
export function CommunitySlide({ data }) {
	return (
		<div className="post__container">
			<div className="post__text">{data.description}</div>
			<div className="post__info">
				<div className="post__age">{data.age}</div>
				<div className="post__company">{data.company}</div>
			</div>
		</div>
	);
}

export function ChatSlide({ data }) {
	return (
		<div className="chat__room__container">
			<div className="chat__room__title">{data.title} 관련 정보 공유방</div>
			<div className="chat__text">
				저희 방은 {data.description} 관련 정보 공유를 하는 방입니다.
			</div>
			<div className="chat__btn__box">
				<div className="people__num">
					<span>
						{data.now}명 / {data.max}명
					</span>
				</div>
				<div className="chat__btn">입장하기</div>
			</div>
		</div>
	);
}
