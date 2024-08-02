import "../stylesheets/Common.css";
import "../stylesheets/Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Logo from "./Logo";

function Header() {
	return (
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
						<Link to={"/"}>로그인</Link>
					</li>
					<li className="linkItem">
						<Link to={"/"}>회원가입</Link>
					</li>
					<li className="linkItem">
						<Link to="/mypage">마이페이지</Link>
					</li>
				</div>
			</ul>
		</header>
	);
}
export default Header;
