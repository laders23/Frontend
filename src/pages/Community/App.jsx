import { Routes, Route } from 'react-router-dom';
import CommunityPage from './CommunityPage';
import PostDetailPage from './Post/PostDetailPage';
import '../../App.css';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<CommunityPage />} />
      <Route path="post/:id" element={<PostDetailPage />} />
    </Routes>
  );
};

export default App;
