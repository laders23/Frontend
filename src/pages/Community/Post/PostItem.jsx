/* eslint-disable react/prop-types */
import { GrFormView } from "react-icons/gr";
import { FaCommentDots, FaThumbsUp } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./PostItem.css";

const PostItem = ({ post }) => {
	const navigate = useNavigate();

	const handleClick = (e) => {
		e.stopPropagation();
		navigate(`/community/${post.id}`);
	};

	const shortenedContent =
		post.content.length > 40 ? (
			<>
				{post.content.slice(0, 78)}
				<span className="ellipsis">...</span>
				<span className="more">더보기</span>
			</>
		) : (
			post.content
		);

	return (
		<div className="post-item" onClick={handleClick}>
			<div className="post-header">
				<h2 className="post-title">{post.title}</h2>
				<span className="post-meta">
					{post.company} | {post.age}세
				</span>
			</div>
			<p>{shortenedContent}</p>
			<div className="post-info">
				<span className="icon-container">
					<GrFormView size={20} /> {post.viewCount}
				</span>
				<span className="icon-container">
					<FaCommentDots size={13} />
					{" " + post.commentCount}
				</span>
				<span className="icon-container">
					<FaThumbsUp size={15} /> {post.likeCount}
				</span>
			</div>
		</div>
	);
};

export default PostItem;
