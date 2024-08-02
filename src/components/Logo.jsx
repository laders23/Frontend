import "../stylesheets/logo.css";
import { Link } from "react-router-dom";

export default function Logo() {
	return (
		<Link to={"/"} className="logo__anchor">
			<span className="logo__text">MEETPRO</span>
		</Link>
	);
}
