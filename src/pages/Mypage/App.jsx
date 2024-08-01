import './App.css';
import Calendar from './Calendar/Calendar';

function App() {
  return (
    <div className="App">
      
      <main className="main-content">
        <section className="profile-section">
          <img src="/images/콘.png" alt="Avatar" className="avatar" />
          <h2 style={{ fontSize: '1.5em', fontWeight: 'bold' }}>콘</h2>
          <div className="profile-info">
            <div className="profile-detail">
              <div>회사명: 카카오</div>
              <div>부서: 백엔드</div>
            </div>
            <div className="profile-detail">
              <div>경력: 5년</div>
              <div>인증: 완료</div>
            </div>
          </div>
          <button className="edit-profile">프로필 편집</button>
        </section>
        <section className="chat-section">
          <h3 className='section-title'>참여중인 채팅방</h3>
          <div className="chat-room">
            <p>개발 토론하실분~</p>
            <button style={{ fontSize: '0.3em'}}>입장</button>
          </div>
          <div className="chat-room">
            <p>금융 관련 정보 공유방</p>
            <button style={{ fontSize: '0.3em'}}>입장</button>
          </div>
        </section>
        <section className="matching-section">
          <h3 className='section-title'>최근 매칭 기록</h3>
          <div className="matching-record">
            <img src="/images/삼성.png" alt="Samsung" />
            <p>OO기업에서 일하고 있는 경력 12년차 OOO입니다..</p>
          </div>
          <div className="matching-record">
            <img src="/images/카카오.png" alt="Kakao" />
            <p>OO기업에서 일하고 있는 경력 10년차 OOO입니다.</p>
          </div>
        </section>
        <section className="diary-section">
          <h3 className='section-title'>다이어리</h3>
          <div className="calendar">
            <Calendar />
          </div>
        </section>
        <section className="posts-section">
          <h3 className='section-title'>내가 쓴 글</h3>
          <div className="post">
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
      </main>
    </div>
  );
}

export default App;
