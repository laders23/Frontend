/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import "./FavoriteList.css";

const FavoriteList = ({ experts, favoriteChange }) => {
	const [favorites, setFavorites] = useState([]);

	useEffect(() => {
		updateFavorites();
	}, [experts, favoriteChange]);

	const updateFavorites = () => {
		const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || {};
		const favoriteExperts = experts.filter(
			(expert) => savedFavorites[expert.id]
		);
		setFavorites(favoriteExperts);
	};

	return (
		<div className="favorite-list">
			<h3>찜한 전문가 목록</h3>
			{favorites.length > 0 ? (
				favorites.map((expert) => (
					<div key={expert.id} className="favorite-expert-card">
						<img
							src={expert.profileImage}
							alt={expert.name}
							className="favorite-expert-image"
						/>
						<div className="favorite-expert-info">
							<h4>{expert.name}</h4>
							<p>{expert.profession}</p>
						</div>
					</div>
				))
			) : (
				<p>찜한 전문가가 없습니다.</p>
			)}
		</div>
	);
};

export default FavoriteList;
