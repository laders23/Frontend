import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import MainPage from "./pages/MainPage";
import Register from "./pages/Register";
import RegisterDetail from "./pages/RegisterDetail";
import OpenChat from "./pages/OpenChat";
import Mypage from "./pages/Mypage/App";
import Community from "./pages/Community/Community";
import ExpertListPage from "./pages/ExpertMatching/ExpertListPage"; // 경로 확인
import PostDetail from "./pages/Community/Post/PostDetail";
import { RecoilRoot } from "recoil";
import './stylesheets/Common.css';

function App() {
  return (
    <RecoilRoot>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="register" element={<Register />} />
          <Route path="registerDetail" element={<RegisterDetail />} />
          <Route path="chat" element={<OpenChat />} />
          <Route path="mypage" element={<Mypage />} />
          <Route path="community" element={<Community />} />
          <Route path="community/:id" element={<PostDetail />} />
          <Route path="experts" element={<ExpertListPage />} /> {/* 수정된 부분 */}
        </Routes>
      </Router>
    </RecoilRoot>
  );
}

export default App;
