import PropTypes from 'prop-types';
import PostItem from './PostItem';

const PostList = ({ posts }) => {
  return (
    <div>
      {posts.length > 0 ? (
        posts.map(post => (
          <PostItem key={post.id} post={post} />
        ))
      ) : (
        <p>게시물이 없습니다.</p>
      )}
    </div>
  );
};

PostList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default PostList;
