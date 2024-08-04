import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import './PostDetail.css'; // CSS 파일 import
import PostCard from './PostCard'; // PostCard import

const PostDetail = () => {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState("");

    useEffect(() => {
        const fetchedPost = {
            id,
            title: "스타트업 관련해서 하나만 더 질문드리겠습니다!",
            content: `
                앞선 게시글에 댓글 달아주신 분들 너무 감사합니다.
                '스타트업은 급박할 수 있고 월급도 제대로 못 나올 수도 있다'가 스타트업이 위험한 이유라고 정리할 수 있을 것 같네요.

                제 입장에서 스타트업이 괜찮은 것 같은 이유를 정리해봤는데 이에 대해서도 고견 남겨주시면 감사하겠습니다.

                1. 유저보수를 하는 게 아닌, 기획부터 개발까지 해볼 수 있다.
                2. 아하! 지금 취업이 잘 안 되는 말이 여기저기서 들려옵니다. 솔직히 저로선 대기업 신입, 괜찮은 서비스 기업 신입이...
            `,
        };
        setPost(fetchedPost);
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
                <img src="프로필사진URL" alt="Profile" className="profile-pic" /> {/* 프로필 사진 추가 */}
                <div className="post-info">
                    <span>과카</span>
                    <span>⚡ 43 · 약 10시간 전 · 👁️ 303 · 수정됨</span>
                </div>
            </div>
            <PostCard post={post} />
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
