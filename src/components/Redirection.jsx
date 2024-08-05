import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../stylesheets/redirection.css";

export default function Redirection() {
	const navigate = useNavigate();

	useEffect(() => {
		axios
			.get(`${import.meta.env.VITE_BACK_DEPLOY_URL}:8080/oauth-login`)
			.then((response) => {
				console.log(response);

				navigate("/");
			});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className="redirection__wrapper">
			<span className="redirection__loader"></span>
		</div>
	);
}
