import { useState, useEffect, useRef } from 'react';
import ExpertCard from './ExpertCard';
import FavoriteList from './FavoriteList';
import './ExpertListPage.css';
import { FaSearch, } from "react-icons/fa";

const ExpertListPage = () => {
  const experts = [
      { id: 1, name: '이민수', profession: '프론트엔드 개발자', rating: 4.5, description: "10년 이상의 경력을 가진 프론트엔드 개발자로, HTML, CSS, JavaScript를 활용하여 사용자 친화적인 웹 애플리케이션을 개발합니다.", profileImage: "public/images/profile1.jpg" },
      { id: 2, name: '김영준', profession: '백엔드 개발자', rating: 4.0, description: "신뢰할 수 있는 백엔드 개발자로, 데이터베이스 설계와 API 개발에 뛰어난 전문성을 갖추고 있습니다.", profileImage: "public/images/profile1.jpg" },
      { id: 3, name: '박지훈', profession: '풀스택 개발자', rating: 4.3, description: "프론트엔드와 백엔드를 모두 아우르는 풀스택 개발자로, 전체 시스템의 구조를 설계하고 효율적인 솔루션을 제공합니다.", profileImage: "public/images/profile1.jpg" },
      { id: 4, name: '최민정', profession: 'UI/UX 디자이너', rating: 4.6, description: "사용자 경험과 인터페이스 디자인을 전문으로 하는 UI/UX 디자이너로, 직관적이고 매력적인 디자인을 구현합니다.", profileImage: "public/images/profile1.jpg" },
      { id: 5, name: '정우성', profession: '웹 개발자', rating: 4.7, description: "최신 웹 기술을 활용하여 사용자가 편리하게 이용할 수 있는 웹사이트를 개발하며, 프론트엔드와 백엔드 모두에 능숙합니다.", profileImage: "public/images/profile1.jpg" },
      { id: 6, name: '이소연', profession: '그래픽 디자이너', rating: 4.8, description: "로고, 브로셔, 웹 디자인 등 다양한 시각적 콘텐츠를 창의적이고 혁신적으로 제작합니다.", profileImage: "public/images/profile1.jpg" },
      { id: 7, name: '김민재', profession: '디지털 마케팅 전문가', rating: 4.2, description: "효과적인 디지털 마케팅 전략을 수립하고 실행하여 브랜드 인지도를 높이는 데 주력합니다.", profileImage: "public/images/profile1.jpg" },
      { id: 8, name: '이상훈', profession: '소프트웨어 엔지니어', rating: 4.9, description: "고품질의 소프트웨어 솔루션을 설계하고 개발하며, 다양한 프로그래밍 언어와 도구에 능숙합니다.", profileImage: "public/images/profile1.jpg" },
      { id: 9, name: '강유리', profession: '데이터 분석가', rating: 4.1, description: "데이터를 분석하여 유용한 인사이트를 도출하고, 이를 통해 비즈니스 의사 결정을 지원합니다.", profileImage: "public/images/profile1.jpg" },
      { id: 10, name: '홍성주', profession: 'SEO 전문가', rating: 4.3, description: "검색 엔진 최적화(SEO)를 통해 웹사이트의 가시성과 트래픽을 증대시키며, 검색 순위를 향상시킵니다.", profileImage: "public/images/profile1.jpg" },
      { id: 11, name: '최지혜', profession: '소셜 미디어 마케터', rating: 4.5, description: "다양한 소셜 미디어 플랫폼을 활용하여 마케팅 캠페인을 기획하고 실행하여 브랜드의 소셜 미디어 존재감을 강화합니다.", profileImage: "public/images/profile1.jpg" },
      { id: 12, name: '이준호', profession: '콘텐츠 마케팅 전문가', rating: 4.0, description: "가치 있는 콘텐츠를 제작하여 브랜드 인지도를 높이고, 고객 참여를 유도하여 마케팅 효과를 극대화합니다.", profileImage: "public/images/profile1.jpg" },
      { id: 13, name: '김하늘', profession: '프로덕트 매니저', rating: 4.3, description: "제품 개발과 출시 과정을 관리하며, 고객의 요구 사항을 반영하여 성공적인 제품을 시장에 출시합니다.", profileImage: "public/images/profile1.jpg" },
      { id: 14, name: '박진수', profession: '고객 서비스 전문가', rating: 4.6, description: "고객 만족을 최우선으로 하며, 문제 해결 능력을 통해 고객의 다양한 요구를 충족시키는 서비스를 제공합니다.", profileImage: "public/images/profile1.jpg" },
      { id: 15, name: '오수정', profession: '재무 분석가', rating: 4.7, description: "기업의 재무 상태를 분석하고 재무 보고서를 작성하며, 정확한 데이터 분석 능력으로 재무 전략을 수립합니다.", profileImage: "public/images/profile1.jpg" }
  ];

  const [displayedExperts, setDisplayedExperts] = useState(experts.slice(0, 5));
  const [showTopButton, setShowTopButton] = useState(false);
  const [favoriteChange, setFavoriteChange] = useState(false);
  const observerRef = useRef();

  const loadMoreExperts = () => {
    setDisplayedExperts((prev) => {
      const nextIndex = prev.length;
      return [...prev, ...experts.slice(nextIndex, nextIndex + 5)];
    });
  };

  const handleFavoriteChange = () => {
    setFavoriteChange(!favoriteChange);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadMoreExperts();
        }
      },
      { threshold: 1.0 }
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => {
      if (observerRef.current) {
        observer.unobserve(observerRef.current);
      }
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setShowTopButton(true);
    } else {
      setShowTopButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="expert-container">
      <h1 className="title">고수 매칭</h1>
      <p className="expert-subtitle">고수들과의 커뮤니티를 즐겨보세요</p>
				<div className="community__search-bar">
					<FaSearch className="community__search-icon" />
					<input
						type="text"
						placeholder=" 고수 내에서 검색"
						className="community__search-bar__input"
					/>
				</div>
    <div className="expert-list-page">
      <div className="expert-filter-container">
        <FavoriteList experts={experts} favoriteChange={favoriteChange} />
      </div>
      <div className="expert-cards-container">
        {displayedExperts.map((expert) => (
          <ExpertCard key={expert.id} expert={expert} onFavoriteChange={handleFavoriteChange} />
        ))}
        <div ref={observerRef} />
      </div>
      <button className={`scroll-to-top ${showTopButton ? 'show' : ''}`} onClick={scrollToTop}>
        Top
      </button>
    </div>
  </div>
  );
};

export default ExpertListPage;
