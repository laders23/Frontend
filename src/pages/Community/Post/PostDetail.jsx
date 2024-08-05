import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import './PostDetail.css';
import PostCard from './PostCard';

const fetchedPosts = [
    {
        id: 1,
        title: "직속 선배랑 밥 꿀팁 좀요",
        content: "오늘 회사에서 직속선배랑 같이 밥을 먹는데 제가 소심한 성격이라서 말을 잘 못걸겠습니다. 이럴때 아이스 브레이킹을 하는 방법 좀 알려주세요ㅠㅠ",
        viewCount: 3000,
        commentCount: 2,
        likeCount: 3,
        company: "NAVER",
        age: 28,
    },
    {
        id: 2,
        title: "미래에 대한 확신이 없어요",
        content: "현재 컴퓨터 개발 업계에서 종사하고 있는 3년차 개발자 입니다. 많은 것들을 배우고 있지만 미래에 대해서 아직까지 확신이 없는 상태입니다. 만나서 고민상담 해주실 인생 선배님 찾습니다.",
        viewCount: 1200,
        commentCount: 1,
        likeCount: 0,
        company: "KAKAO",
        age: 32,
    },{
        id: 3,
        title: "미래에 대한 확신이 없어요",
        content: "현재 컴퓨터 개발 업계에서 종사하고 있는 3년차 개발자 입니다. 많은 것들을 배우고 있지만 미래에 대해서 아직까지 확신이 없는 상태입니다. 만나서 고민상담 해주실 인생 선배님 찾습니다.",
        viewCount: 1200,
        commentCount: 1,
        likeCount: 0,
        company: "KAKAO",
        age: 32,
    },{
        id: 4,
        title: "미래에 대한 확신이 없어요",
        content: "현재 컴퓨터 개발 업계에서 종사하고 있는 3년차 개발자 입니다. 많은 것들을 배우고 있지만 미래에 대해서 아직까지 확신이 없는 상태입니다. 만나서 고민상담 해주실 인생 선배님 찾습니다.",
        viewCount: 1200,
        commentCount: 1,
        likeCount: 0,
        company: "KAKAO",
        age: 32,
    },{
        id: 5,
        title: "미래에 대한 확신이 없어요",
        content: "현재 컴퓨터 개발 업계에서 종사하고 있는 3년차 개발자 입니다. 많은 것들을 배우고 있지만 미래에 대해서 아직까지 확신이 없는 상태입니다. 만나서 고민상담 해주실 인생 선배님 찾습니다.",
        viewCount: 1200,
        commentCount: 1,
        likeCount: 0,
        company: "KAKAO",
        age: 32,
    },
];

const PostDetail = () => {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState("");

    useEffect(() => {
        const foundPost = fetchedPosts.find(post => post.id === parseInt(id));
        setPost(foundPost);
    }, [id]);

    const handleCommentSubmit = (e) => {
        e.preventDefault();
        if (newComment.trim()) {
            setComments([...comments, newComment]);
            setNewComment("");
        }
    };

    if (!post) return <div>Loading...</div>;

    return (
        <div className="post-detail">
            <div className="post-header">
                <img src="프로필사진URL" alt="Profile" className="profile-pic" />
                <div className="post-info">
                    <span>{post.company}</span>
                    <span>⚡ {post.age}세 · 약 10시간 전 · 👁️ {post.viewCount} · 수정됨</span>
                </div>
            </div>
            <h1>{post.title}</h1>
            <p>{post.content.split('\n').map((line, index) => (
                <span key={index}>
                    {line}
                    <br />
                </span>
            ))}</p>

            <div className="comment-section">
                <h2>{comments.length}개의 댓글</h2>
                <form onSubmit={handleCommentSubmit} className="comment-form">
                    <input
                        type="text"
                        placeholder="댓글을 작성하세요..."
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        className="comment-input"
                    />
                    <button type="submit" className="comment-submit">댓글 쓰기</button>
                </form>
                <div className="comments-list">
                    {comments.map((comment, index) => (
                        <div key={index} className="comment">
                            <strong>사용자 이름</strong> <span>· 약 1시간 전</span>
                            <p>{comment}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PostDetail;
