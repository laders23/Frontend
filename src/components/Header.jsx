import "../stylesheets/Common.css";
import "../stylesheets/Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import { useReducer } from "react";
import LoginModal from "./LoginModal";

function Header() {
	const [isModalOpen, modalToggle] = useReducer(
		(modalState) => !modalState,
		false
	);

	return (
		<>
			<header className="headerContainer">
				<ul className="ulContainer">
					<div className="logoAndsearch">
						<Logo />
						<div className="searchBar__container">
							<FontAwesomeIcon icon={faMagnifyingGlass} />
							<input
								className="searchBar"
								type="text"
								placeholder="나의 인생 선배를 찾아보세요"
							/>
						</div>
					</div>
					<div className="linkBox">
						<li className="linkItem">
							<div className="linkItem__login" onClick={modalToggle}>
								로그인
							</div>
						</li>
						<li className="linkItem">
							<Link to={"register"}>회원가입</Link>
						</li>
						<li className="linkItem">
							<Link to="mypage">마이페이지</Link>
						</li>
					</div>
				</ul>
			</header>
			<LoginModal isModalOpen={isModalOpen} modalToggle={modalToggle} />
		</>
	);
}
export default Header;
