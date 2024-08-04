import React from 'react';
import PostCard from './PostCard';

const PostList = ({ posts, onPostClick }) => {
    return (
        <div>
            {posts.map(post => (
                <div key={post.id} onClick={() => onPostClick(post.id)}> {/* 클릭 핸들러 추가 */}
                    <PostCard post={post} />
                </div>
            ))}
        </div>
    );
};

export default PostList;
