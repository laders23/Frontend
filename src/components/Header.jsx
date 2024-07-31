import "../stylesheets/Common.css";
import "../stylesheets/Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import logo from "../images/Preview.jpg";
import { Link } from "react-router-dom";

function Header() {
	return (
		<header className="headerContainer">
			<nav className="navContainer">
				<ul className="ulContainer">
					<div className="logoBox">
						<li>
							<a href="#">
								<img src={logo}></img>
							</a>
						</li>
						<li>
							<FontAwesomeIcon icon={faMagnifyingGlass} />
							<input
								className="searchBar"
								type="text"
								placeholder="나의 인생 선배를 찾아보세요"
							/>
						</li>
					</div>
					<div className="linkBox">
						<li className="linkItem">
							<a href="#">로그인</a>
						</li>
						<li className="linkItem">
							<a href="#">회원가입</a>
						</li>
						<li className="linkItem">
							<Link to="/mypage">마이페이지</Link>
						</li>
					</div>
				</ul>
			</nav>
		</header>
	);
}
export default Header;
