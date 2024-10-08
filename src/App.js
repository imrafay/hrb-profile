import './App.css';
import Header from './sections/Header';
import Footer from './sections/Footer';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BlogsPage from './pages/BlogsPage';
import BlogDetailPage from './pages/BlogDetailPage';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<BlogsPage />} />
          <Route path="/blogs/:category" element={<BlogsPage />} />
          <Route path="/blogs/:category/:id" element={<BlogDetailPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
