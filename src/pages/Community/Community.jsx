import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // React Router 사용
import PostList from "./Post/PostList";
import "./Community.css";
import { FaSearch, FaSyncAlt } from "react-icons/fa";

const fetchedPosts = [
	// 게시글 데이터 추가
	{
		id: 1,
		title: "직속 선배랑 밥 꿀팁 좀요",
		content:
			"오늘 회사에서 직속선배랑 같이 밥을 먹는데 제가 소심한 성격이라서 말을 잘 못걸겠습니다. 이럴때 아이스 브레이킹을 하는 방법 좀 알려주세요ㅠㅠ",
		viewCount: 3000,
		commentCount: 2,
		likeCount: 3,
		company: "NAVER",
		age: 28,
	},
	{
		id: 2,
		title: "미래에 대한 확신이 없어요",
		content:
			"현재 컴퓨터 개발 업계에서 종사하고 있는 3년차 개발자 입니다. 많은 것들을 배우고 있지만 미래에 대해서 아직까지 확신이 없는 상태입니다. 만나서 고민상담 해주실 인생 선배님 찾습니다.",
		viewCount: 1200,
		commentCount: 1,
		likeCount: 0,
		company: "KAKAO",
		age: 32,
	},
];

const Community = () => {
	const [posts, setPosts] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const postsPerPage = 8;
	const history = useHistory(); // useHistory 훅 사용

	useEffect(() => {
		setPosts(fetchedPosts);
	}, []);

	const indexOfLastPost = currentPage * postsPerPage;
	const indexOfFirstPost = indexOfLastPost - postsPerPage;
	const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
	const totalPages = Math.ceil(posts.length / postsPerPage);

	const handlePostClick = (postId) => {
		history.push(`/post/${postId}`); // 상세 페이지로 이동
	};

	return (
		<div className="community__container">
			<h1>커뮤니티</h1>
			<p className="community__subtitle">새로운 사람들과 소통을 시작하세요</p>
			<div className="community__search-pagination">
				<FaSyncAlt className="community__refresh-icon" />
				<div className="community__search-bar">
					<FaSearch className="community__search-icon" />
					<input
						type="text"
						placeholder="커뮤니티 내에서 검색"
						className="community__search-bar__input"
					/>
				</div>
				<div className="community__top-pagination">
					<button
						onClick={() => setCurrentPage(currentPage - 1)}
						disabled={currentPage === 1}
					>
						&lt;
					</button>
					<span className="community__top-page-number">
						{currentPage} / {totalPages}
					</span>
					<button
						onClick={() => setCurrentPage(currentPage + 1)}
						disabled={currentPage === totalPages}
					>
						&gt;
					</button>
				</div>
			</div>
			{currentPosts.length > 0 ? (
				<PostList posts={currentPosts} onPostClick={handlePostClick} /> // 클릭 핸들러 전달
			) : (
				<p>로딩 중...</p>
			)}
			<div className="community__bottom-pagination">
				<button
					onClick={() => setCurrentPage(currentPage - 1)}
					disabled={currentPage === 1}
					className="community__bottom-pagination__arrow"
				>
					&lt;
				</button>
				{Array.from({ length: totalPages }, (_, index) => (
					<button
						key={index + 1}
						onClick={() => setCurrentPage(index + 1)}
						className={
							currentPage === index + 1
								? "active community__bottom-pagination__index"
								: "community__bottom-pagination__index"
						}
					>
						{index + 1}
					</button>
				))}
				<button
					onClick={() => setCurrentPage(currentPage + 1)}
					disabled={currentPage === totalPages}
					className="community__bottom-pagination__arrow"
				>
					&gt;
				</button>
			</div>
		</div>
	);
};

export default Community;
