import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Index from "./pages/Index";
import IndexBody from "./pages/IndexBody";
import IndexFooter from "./pages/IndexFooter";
import Mypage from "./pages/Mypage/App";
import Community from "./pages/Community/App";

function App() {
	return (
		<Router>
			<Header />
			<Routes>
				<Route path="/" element={<MainPage />} />
				<Route path="/register" element={<Register />} />
				<Route path="/registerDetail" element={<RegisterDetail />} />
				<Route path="/Chat" element={<OpenChat />} />
				<Route path="/mypage" element={<Mypage />} />
				<Route path="/community/*" element={<Community />} />
			</Routes>
		</Router>
	);
}

export default App;
