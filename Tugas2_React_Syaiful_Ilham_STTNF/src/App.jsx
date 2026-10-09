import { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import BookPage from './pages/Bookpage';
import initialBooks from './utils/books';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import ContactPage from './pages/Contact';
import HomePage from './pages/Home';
import LoginPage from './pages/Login';
import MaterialDetailPage from './pages/MaterialDetail';
import RegisterPage from './pages/Register';
import TeamPage from './pages/Team';
import './App.css';

function NotFoundPage() {
  return (
    <main className="container my-5 text-center">
      <h1>Halaman tidak ditemukan</h1>
      <Link to="/">Kembali ke Home</Link>
    </main>
  );
}

function App() {
  const [books, setBooks] = useState(initialBooks);

  const handleAddBook = (newBook) => {
    setBooks((prev) => [...prev, { ...newBook, id: Math.max(...prev.map((b) => b.id)) + 1 }]);
  };

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage books={books} />} />
        <Route path="/book" element={<BookPage books={books} onAddBook={handleAddBook} />} />
        <Route path="/buku/:id" element={<MaterialDetailPage books={books} />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;