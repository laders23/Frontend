import job__logo from "/images/카카오.png";

export default function Slide() {
	return (
		<div className="profile__container">
			<a className="profile__link" href="#">
				<img className="job__logo" src={job__logo} />
				<span className="job__descrip">
					OO기업에서 OO업무를 맡고있는 경력 10년차 OOO입니다
				</span>
			</a>
		</div>
	);
}
