import { GrFormView } from 'react-icons/gr';
import { FaCommentDots, FaThumbsUp } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';
import './PostItem.css';

const PostItem = ({ post }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/community/post/${post.id}`);
  };

  const shortenedContent = post.content.length > 40 
    ? (
        <>
          {post.content.slice(0, 40)}
          <span className="ellipsis">...</span>
          <span className="more">더보기</span>
        </>
      ) 
    : post.content;

  return (
    <div className="post-item" onClick={handleClick}>
      <div className="post-header">
        <h2 className="post-title"><Link to={`/community/post/${post.id}`} onClick={(e) => e.stopPropagation()}>{post.title}</Link></h2>
        <span className="post-meta">{post.company} | {post.age}세</span>
      </div>
      <p>{shortenedContent}</p>
      <div className="post-info">
        <span className="icon-container"><GrFormView size={20} /> {post.viewCount}</span>
        <span className="icon-container"><FaCommentDots size={13} />{' '+post.commentCount}</span>
        <span className="icon-container"><FaThumbsUp size={15}/> {post.likeCount}</span>
      </div>
    </div>
  );
};

PostItem.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    viewCount: PropTypes.number.isRequired,
    commentCount: PropTypes.number.isRequired,
    likeCount: PropTypes.number.isRequired,
    company: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
  }).isRequired,
};

export default PostItem;
