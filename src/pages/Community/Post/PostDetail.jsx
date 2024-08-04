import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const PostDetail = () => {
	const { id } = useParams();
	const [post, setPost] = useState(null);

	useEffect(() => {
		const fetchedPost = {
			id,
			title: "여기 제목",
			content: "여긴 상세 내용입니다",
		};
		setPost(fetchedPost);
	}, [id]);

	if (!post) return <div>Loading...</div>;

	return (
		<div>
			<h1>{post.title}</h1>
			<p>{post.content}</p>
		</div>
	);
};

export default PostDetail;
