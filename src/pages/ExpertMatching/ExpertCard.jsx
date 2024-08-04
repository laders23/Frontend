import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt, faStar as faStarEmpty, faHeart as faHeartFilled, faHeart as faHeartEmpty } from '@fortawesome/free-solid-svg-icons';
import './ExpertCard.css';

const ExpertCard = ({ expert, onFavoriteChange }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || {};
    setIsFavorite(!!savedFavorites[expert.id]);
  }, [expert.id]);

  const toggleFavorite = () => {
    const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || {};
    if (savedFavorites[expert.id]) {
      delete savedFavorites[expert.id];
    } else {
      savedFavorites[expert.id] = true;
    }
    localStorage.setItem('favorites', JSON.stringify(savedFavorites));
    setIsFavorite(!isFavorite);
    onFavoriteChange();
  };

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating - fullStars >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
      <div className="stars-container">
        {[...Array(fullStars)].map((_, index) => (
          <FontAwesomeIcon key={`full-${index}`} icon={faStar} className="fa-icon" />
        ))}
        {halfStar && <FontAwesomeIcon icon={faStarHalfAlt} className="fa-icon" />}
        {[...Array(emptyStars)].map((_, index) => (
          <FontAwesomeIcon key={`empty-${index}`} icon={faStarEmpty} className="fa-icon" />
        ))}
      </div>
    );
  };

  return (
    <div className="expert-card">
      <img src={expert.profileImage} alt={expert.name} />
      <div className="expert-info">
        <h2>{expert.name}</h2>
        <p>{expert.profession}</p>
        <div className="rating">{renderStars(expert.rating)}</div>
        <p className="description">{expert.description}</p>
      </div>
      <div className="favorite-icon" onClick={toggleFavorite}>
        <FontAwesomeIcon icon={isFavorite ? faHeartFilled : faHeartEmpty} className={`fa-icon ${isFavorite ? 'fa-heart-filled' : 'fa-heart-empty'}`} />
      </div>
    </div>
  );
};

ExpertCard.propTypes = {
  expert: PropTypes.shape({
    profileImage: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    profession: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
  onFavoriteChange: PropTypes.func.isRequired,
};

export default ExpertCard;
