import "./App.css";
import HomePage from "./pages/home/HomePage";
import { Routes, Route } from "react-router-dom";
import ArticleDetailPage from "./pages/home/articleDetail/ArticleDetailPage";
import ResgisterPage from "./pages/home/register/ResgisterPage";

function App() {
  return (
    <div className="App font-opensans">
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route path="/blog/:id" element={<ArticleDetailPage />} />
        <Route path="/register" element={<ResgisterPage />} />
      </Routes>
    </div>
  );
}

export default App;
