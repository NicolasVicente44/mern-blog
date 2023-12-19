import "./App.css";
import HomePage from "./pages/home/HomePage";
import { Routes, Route } from "react-router-dom";
import ArticleDetailPage from "./pages/home/articleDetail/ArticleDetailPage";
import ResgisterPage from "./pages/home/register/ResgisterPage";
import { Toaster } from "react-hot-toast";
import Loginpage from "./pages/home/login/Loginpage";
import ProfilePage from "./pages/home/profile/ProfilePage";
import AdminLayout from "./pages/home/admin/AdminLayout";
import Admin from "./pages/home/admin/screens/Admin";
import Comments from "./pages/home/admin/screens/Comments";
import ManagePosts from "./pages/home/admin/screens/posts/ManagePosts";
import EditPost from "./pages/home/admin/screens/posts/EditPost";
import About from "./components/About";
import Contact from "./components/Contact";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import Blog from "./components/Blog";

function App() {
  return (
    <div className="App font-opensans">
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route path="/blog/:slug" element={<ArticleDetailPage />} />
        <Route path="/register" element={<ResgisterPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/articles" element={<Blog />} />
        <Route path="/login" element={<Loginpage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Admin />} />
          <Route path="comments" index element={<Comments />} />
          <Route path="posts/manage" index element={<ManagePosts />} />
          <Route path="posts/manage/edit/:slug" index element={<EditPost />} />
        </Route>
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
