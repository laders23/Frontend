import { useState, useEffect } from 'react';
import PostList from './Post/PostList';
import './CommunityPage.css';
import { FaSearch, FaSyncAlt } from 'react-icons/fa';

const CommunityPage = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 8;

  useEffect(() => {
    const fetchedPosts = [
      // 게시글 데이터 추가
      { id: 1, title: '직속 선배랑 밥 꿀팁 좀요', content: '오늘 회사에서 직속선배랑 같이 밥을 먹는데 제가 소심한 성격이라서 말을 잘 못걸겠습니다. 이럴때 아이스 브레이킹을 하는 방법 좀 알려주세요ㅠㅠ', viewCount: 3000, commentCount: 2, likeCount: 3, company: 'NAVER', age: 28 },
      { id: 2, title: '미래에 대한 확신이 없어요', content: '현재 컴퓨터 개발 업계에서 종사하고 있는 3년차 개발자 입니다. 많은 것들을 배우고 있지만 미래에 대해서 아직까지 확신이 없는 상태입니다. 만나서 고민상담 해주실 인생 선배님 찾습니다.', viewCount: 1200, commentCount: 1, likeCount: 0, company: 'KAKAO', age: 32 },
      { id: 3, title: '미래에 대한 확신이 없어요', content: '현재 컴퓨터 개발 업계에서 종사하고 있는 3년차 개발자 입니다. 많은 것들을 배우고 있지만 미래에 대해서 아직까지 확신이 없는 상태입니다. 만나서 고민상담 해주실 인생 선배님 찾습니다.', viewCount: 5300, commentCount: 10, likeCount: 15, company: 'Google', age: 30 },
      { id: 4, title: '미래에 대한 확신이 없어요', content: '현재 컴퓨터 개발 업계에서 종사하고 있는 3년차 개발자 입니다. 많은 것들을 배우고 있지만 미래에 대해서 아직까지 확신이 없는 상태입니다. 만나서 고민상담 해주실 인생 선배님 찾습니다.', viewCount: 5300, commentCount: 10, likeCount: 17, company: 'Microsoft', age: 29 },
      { id: 5, title: '미래에 대한 확신이 없어요', content: '현재 컴퓨터 개발 업계에서 종사하고 있는 3년차 개발자 입니다. 많은 것들을 배우고 있지만 미래에 대해서 아직까지 확신이 없는 상태입니다. 만나서 고민상담 해주실 인생 선배님 찾습니다.', viewCount: 5300, commentCount: 10, likeCount: 17, company: 'Amazon', age: 29 },
      { id: 6, title: '미래에 대한 확신이 없어요', content: '현재 컴퓨터 개발 업계에서 종사하고 있는 3년차 개발자 입니다. 많은 것들을 배우고 있지만 미래에 대해서 아직까지 확신이 없는 상태입니다. 만나서 고민상담 해주실 인생 선배님 찾습니다.', viewCount: 5300, commentCount: 10, likeCount: 17, company: 'Apple', age: 29 },
      { id: 7, title: '미래에 대한 확신이 없어요', content: '현재 컴퓨터 개발 업계에서 종사하고 있는 3년차 개발자 입니다. 많은 것들을 배우고 있지만 미래에 대해서 아직까지 확신이 없는 상태입니다. 만나서 고민상담 해주실 인생 선배님 찾습니다.', viewCount: 5300, commentCount: 10, likeCount: 17, company: 'Facebook', age: 29 },
      { id: 8, title: '미래에 대한 확신이 없어요', content: '현재 컴퓨터 개발 업계에서 종사하고 있는 3년차 개발자 입니다. 많은 것들을 배우고 있지만 미래에 대해서 아직까지 확신이 없는 상태입니다. 만나서 고민상담 해주실 인생 선배님 찾습니다.', viewCount: 5300, commentCount: 10, likeCount: 17, company: 'Twitter', age: 29 },
      { id: 9, title: '미래에 대한 확신이 없어요', content: '현재 컴퓨터 개발 업계에서 종사하고 있는 3년차 개발자 입니다. 많은 것들을 배우고 있지만 미래에 대해서 아직까지 확신이 없는 상태입니다. 만나서 고민상담 해주실 인생 선배님 찾습니다.', viewCount: 5300, commentCount: 10, likeCount: 17, company: 'Netflix', age: 29 },
      { id: 10, title: '미래에 대한 확신이 없어요', content: '현재 컴퓨터 개발 업계에서 종사하고 있는 3년차 개발자 입니다. 많은 것들을 배우고 있지만 미래에 대해서 아직까지 확신이 없는 상태입니다. 만나서 고민상담 해주실 인생 선배님 찾습니다.', viewCount: 5300, commentCount: 10, likeCount: 17, company: 'Netflix', age: 29 },
      { id: 11, title: '미래에 대한 확신이 없어요', content: '현재 컴퓨터 개발 업계에서 종사하고 있는 3년차 개발자 입니다. 많은 것들을 배우고 있지만 미래에 대해서 아직까지 확신이 없는 상태입니다. 만나서 고민상담 해주실 인생 선배님 찾습니다.', viewCount: 5300, commentCount: 10, likeCount: 17, company: 'Netflix', age: 29 },
      { id: 12, title: '미래에 대한 확신이 없어요', content: '현재 컴퓨터 개발 업계에서 종사하고 있는 3년차 개발자 입니다. 많은 것들을 배우고 있지만 미래에 대해서 아직까지 확신이 없는 상태입니다. 만나서 고민상담 해주실 인생 선배님 찾습니다.', viewCount: 5300, commentCount: 10, likeCount: 17, company: 'Netflix', age: 29 },
      { id: 13, title: '미래에 대한 확신이 없어요', content: '현재 컴퓨터 개발 업계에서 종사하고 있는 3년차 개발자 입니다. 많은 것들을 배우고 있지만 미래에 대해서 아직까지 확신이 없는 상태입니다. 만나서 고민상담 해주실 인생 선배님 찾습니다.', viewCount: 5300, commentCount: 10, likeCount: 17, company: 'Netflix', age: 29 },
      { id: 14, title: '미래에 대한 확신이 없어요', content: '현재 컴퓨터 개발 업계에서 종사하고 있는 3년차 개발자 입니다. 많은 것들을 배우고 있지만 미래에 대해서 아직까지 확신이 없는 상태입니다. 만나서 고민상담 해주실 인생 선배님 찾습니다.', viewCount: 5300, commentCount: 10, likeCount: 17, company: 'Netflix', age: 29 },
      { id: 15, title: '미래에 대한 확신이 없어요', content: '현재 컴퓨터 개발 업계에서 종사하고 있는 3년차 개발자 입니다. 많은 것들을 배우고 있지만 미래에 대해서 아직까지 확신이 없는 상태입니다. 만나서 고민상담 해주실 인생 선배님 찾습니다.', viewCount: 5300, commentCount: 10, likeCount: 17, company: 'Netflix', age: 29 },
      { id: 16, title: '미래에 대한 확신이 없어요', content: '현재 컴퓨터 개발 업계에서 종사하고 있는 3년차 개발자 입니다. 많은 것들을 배우고 있지만 미래에 대해서 아직까지 확신이 없는 상태입니다. 만나서 고민상담 해주실 인생 선배님 찾습니다.', viewCount: 5300, commentCount: 10, likeCount: 17, company: 'Netflix', age: 29 },
      { id: 17, title: '미래에 대한 확신이 없어요', content: '현재 컴퓨터 개발 업계에서 종사하고 있는 3년차 개발자 입니다. 많은 것들을 배우고 있지만 미래에 대해서 아직까지 확신이 없는 상태입니다. 만나서 고민상담 해주실 인생 선배님 찾습니다.', viewCount: 5300, commentCount: 10, likeCount: 17, company: 'Netflix', age: 29 },
      { id: 18, title: '미래에 대한 확신이 없어요', content: '현재 컴퓨터 개발 업계에서 종사하고 있는 3년차 개발자 입니다. 많은 것들을 배우고 있지만 미래에 대해서 아직까지 확신이 없는 상태입니다. 만나서 고민상담 해주실 인생 선배님 찾습니다.', viewCount: 5300, commentCount: 10, likeCount: 17, company: 'Netflix', age: 29 },
      { id: 19, title: '미래에 대한 확신이 없어요', content: '현재 컴퓨터 개발 업계에서 종사하고 있는 3년차 개발자 입니다. 많은 것들을 배우고 있지만 미래에 대해서 아직까지 확신이 없는 상태입니다. 만나서 고민상담 해주실 인생 선배님 찾습니다.', viewCount: 5300, commentCount: 10, likeCount: 17, company: 'Netflix', age: 29 },
      { id: 20, title: '미래에 대한 확신이 없어요', content: '현재 컴퓨터 개발 업계에서 종사하고 있는 3년차 개발자 입니다. 많은 것들을 배우고 있지만 미래에 대해서 아직까지 확신이 없는 상태입니다. 만나서 고민상담 해주실 인생 선배님 찾습니다.', viewCount: 5300, commentCount: 10, likeCount: 17, company: 'Netflix', age: 29 }, 
    ];
    setPosts(fetchedPosts);
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(posts.length / postsPerPage);

  return (
    <div className="community-container">
      <h1>커뮤니티</h1>
      <p className="subtitle">새로운 사람들과 소통을 시작하세요</p>
      <div className="search-pagination">
        <FaSyncAlt className="refresh-icon" />
        <div className="search-bar">
          <FaSearch className="search-icon" />
          <input type="text" placeholder="커뮤니티 내에서 검색" />
        </div>
        <div className="pagination">
          <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>&lt;</button>
          <span className="page-number">{currentPage} / {totalPages}</span>
          <button onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === totalPages}>&gt;</button>
        </div>
      </div>
      {currentPosts.length > 0 ? <PostList posts={currentPosts} /> : <p>로딩 중...</p>}
      <div className="bottom-pagination">
        <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>&lt; Previous</button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => setCurrentPage(index + 1)}
            className={currentPage === index + 1 ? 'active' : ''}
          >
            {index + 1}
          </button>
        ))}
        <button onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === totalPages}>Next &gt;</button>
      </div>
    </div>
  );
};

export default CommunityPage;