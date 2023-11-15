import "./App.css";
import HomePage from "./pages/home/HomePage";
import { Routes, Route } from "react-router-dom";
import ArticleDetailPage from "./pages/home/articleDetail/ArticleDetailPage";
import ResgisterPage from "./pages/home/register/ResgisterPage";
import { Toaster } from "react-hot-toast";
import Loginpage from "./pages/home/login/Loginpage";
import ProfilePage from "./pages/home/profile/ProfilePage";

function App() {
  return (
    <div className="App font-opensans">
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route path="/blog/:id" element={<ArticleDetailPage />} />
        <Route path="/register" element={<ResgisterPage />} />
        <Route path="/login" element={<Loginpage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
