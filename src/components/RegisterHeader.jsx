import "../stylesheets/Common.css";
import "../stylesheets/RegisterHeader.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

function RegisterHeader() {
	return (
		<>
			<div className="register__header__box">
				<div className="reg__title__box">
					<div className="reg__title__logo">
						<a href="/">
							<div className="register__logo">MeetPro</div>
						</a>
					</div>
					<div className="reg__title">
						<span className="name">회원가입</span>
					</div>
				</div>
				<div className="reg__home__back">
					<a href="/">
						<FontAwesomeIcon className="fa__House" icon={faHouse} />홈
					</a>
				</div>
			</div>
		</>
	);
}

export default RegisterHeader;
