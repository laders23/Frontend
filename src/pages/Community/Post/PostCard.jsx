/* eslint-disable react/prop-types */
// src/pages/Community/Post/PostCard.jsx
import "./PostCard.css"; // 필요한 스타일 파일 import

const PostCard = ({ post }) => {
	return (
		<div className="post-card">
			<h2>{post.title}</h2>
			<p>{post.content}</p>
		</div>
	);
};

export default PostCard;
