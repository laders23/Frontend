/* eslint-disable react/prop-types */
import Modal from "react-modal";
import "../stylesheets/loginModal.css";
import { KAKAO_LINK, NAVER_LINK } from "../util";

const customStyles = {
	overlay: {
		backgroundColor: "rgba(0, 0, 0, 0.5)", // 반투명 배경색
		backdropFilter: "blur(10px)", // 블러 효과
		zIndex: "999",
	},
	content: {
		width: "500px",
		height: "500px",
		padding: "75px",
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-between",
		alignItems: "center",
		border: "1px solid var(--black)",
		borderRadius: "25px",
		boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
		top: "50%",
		left: "50%",
		right: "auto",
		bottom: "auto",
		marginRight: "-50%",
		transform: "translate(-50%, -50%)",
	},
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#root");

export default function LoginModal({ isModalOpen, modalToggle }) {
	function kakaoLoginHandler() {
		window.location.href = KAKAO_LINK;
	}

	function naverLoginHandler() {
		window.location.href = NAVER_LINK;
	}

	return (
		<Modal
			style={customStyles}
			isOpen={isModalOpen}
			onRequestClose={modalToggle}
		>
			<p className="login__logo">MEETPRO</p>
			<div className="login__buttons__wrapper">
				<div className="login__button" onClick={kakaoLoginHandler}>
					<object
						type="image/svg+xml"
						data="/svg/kakao_logo.svg"
						className="login__svg"
					/>
					<p
						style={{
							flex: "1",
							textAlign: "center",
						}}
					>
						카카오톡으로 로그인
					</p>
				</div>
				<div className="login__button" onClick={naverLoginHandler}>
					<object
						type="image/svg+xml"
						data="/svg/naver_logo.svg"
						className="login__svg"
					/>
					<p
						style={{
							flex: "1",
							textAlign: "center",
						}}
					>
						네이버로 로그인
					</p>
				</div>
				<button className="login__button">
					<object
						type="image/svg+xml"
						data="/svg/google_logo.svg"
						className="login__svg"
					/>
					<p
						style={{
							flex: "1",
							textAlign: "center",
						}}
					>
						Google로 로그인
					</p>
				</button>
			</div>
		</Modal>
	);
}
