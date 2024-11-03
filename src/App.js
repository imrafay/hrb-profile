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
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/topics" element={<BlogsPage />} />
            <Route path="/topics/:category" element={<BlogsPage />} />
            <Route path="/topics/:category/:id" element={<BlogDetailPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
