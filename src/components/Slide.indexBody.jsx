export function CommunitySlide() {
	return (
		<div className="post__container">
			<div className="post__text">
				오늘 회사에서 직속선배랑 같이 밥을 먹는데 제가 소심한 성격이라서 말을 잘
				못걸겠습니다. 이럴때 아이스 브레이킹을 하는 방법 좀 알려주세요ㅠㅠ
			</div>
			<div className="post__info">
				<div className="post__age">20대</div>
				<div className="post__company">회사명</div>
			</div>
		</div>
	);
}

export function ChatSlide() {
	return (
		<div className="chat__room__container">
			<div className="chat__room__title">OO 관련 정보 공유방</div>
			<div className="chat__text">
				저희 방은 OOOO 관련 정보 공유를 하는 방입니다.
			</div>
			<div className="chat__btn__box">
				<div className="people__num">
					<span>OO명 / OO명</span>
				</div>
				<div className="chat__btn">입장하기</div>
			</div>
		</div>
	);
}
