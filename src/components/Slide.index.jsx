/* eslint-disable react/prop-types */

export default function Slide({ proProfile }) {
	return (
		<div className="profile__container">
			<a className="profile__link" href="#">
				<img className="job__logo" src={proProfile.img} />
				<span className="job__descrip">{proProfile.description}</span>
			</a>
		</div>
	);
}
