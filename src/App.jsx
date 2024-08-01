import React from "react";
import MainPage from "../src/pages/MainPage";
import Register from "../src/pages/Register";
import RegisterDetail from "./pages/RegisterDetail";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import OpenChat from "./pages/OpenChat";


function App() {
  // const [count, setCount] = useState(0)
  return (
    <React.Fragment>
    <Router>
      <Routes>
        <Route path="/" element={<MainPage/>} />
      </Routes>
      <Routes>
        <Route path="/register" element={<Register/>} />
      </Routes>
      <Routes>
        <Route path="/registerDetail" element={<RegisterDetail />} />
      </Routes>
      <Routes>
        <Route path="/Chat" element= {<OpenChat/>} />
      </Routes>
    </Router>
  </React.Fragment>
  )
}

export default App
