import "./App.css";
import Calendar from "./Calendar/Calendar";

function App() {
	return (
		<main className="main-content">
			<section className="profile-section">
				<img
					src="/images/kon.png"
					alt="profile-img"
					className="mypage__profile__image"
				/>
				<h2 className="mypage__profile__name">콘</h2>
				<div className="mypage__profile-info__wrapper">
					<div className="mypage__profile-detail">
						<div>카카오</div>
						<div>백엔드 5년차</div>
						<div>인증 완료</div>
					</div>
				</div>
				<button className="edit-profile">프로필 편집</button>
			</section>
			<div className="mypage__content__wrapper">
				<section className="mypage__content chat-section">
					<h3 className="section-title">참여중인 채팅방</h3>
					<div className="chat-room">
						<p>개발 토론하실분~</p>
						<button className="mypage__chat-room__btn">입장</button>
					</div>
					<div className="chat-room">
						<p>금융 관련 정보 공유방</p>
						<button className="mypage__chat-room__btn">입장</button>
					</div>
				</section>
				<section className="mypage__content matching-section">
					<h3 className="section-title">최근 매칭 기록</h3>
					<div className="matching-record">
						<img src="/svg/google_logo.svg" alt="google" />
						<p>구글에서 일하고 있는 경력 12년차 OOO입니다</p>
					</div>
					<div className="matching-record">
						<img src="/svg/kakao_logo.svg" alt="kakao" />
						<p>카카오에서 일하고 있는 경력 10년차 OOO입니다</p>
					</div>
				</section>
				<section className="mypage__content diary-section">
					<h3 className="section-title">다이어리</h3>
					<div className="calendar">
						<Calendar />
					</div>
				</section>
				<section className="mypage__content posts-section">
					<h3 className="section-title">내가 쓴 글</h3>
					<div
						className="post"
						style={{
							marginTop: "40px",
						}}
					>
						<h4 className="post-title">선배들 때문에</h4>
						<p>오늘 팀원 다같이 회식하는...</p>
					</div>
					<div className="post">
						<h4 className="post-title">휴가</h4>
						<p>휴가 쓰려니깐 눈치보이는...</p>
					</div>
					<div className="post">
						<h4 className="post-title">탑 엔지니어링 회사</h4>
						<p>여기에 이직하려하는데 정...</p>
					</div>
				</section>
			</div>
		</main>
	);
}

export default App;
