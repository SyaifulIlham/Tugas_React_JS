import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import NavbarComponent from './Elements/navbar';
import Cardgrid from './Elements/cardlist';
import Footer from './Elements/footer';
import TeamPage from './Elements/team';
import ContactPage from './Elements/contact';
import './App.css';

function HomePage() {
  return (
    <>
      <div className="container my-5">
        <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg home-hero">
           <div className="col-lg-6">
              <p className="eyebrow">Cerita Indonesia, dekat di hati</p>
              <h1 className="display-3 fw-bold lh-sm text-body-emphasis">
                Temukan cerita yang <span className="home-hero__accent">tinggal lama.</span>
              </h1>
              <p className="lead mt-3">
                Pilihan buku Indonesia yang kami suka, dari kisah keluarga dan
                persahabatan sampai cerita yang membuka cara pandang baru.
              </p>
              <div className="d-flex flex-wrap align-items-center gap-3 mt-4">
                <Button href="#buku" size="lg" className="home-hero__button">
                  Jelajahi koleksi
                </Button>
                <span className="home-hero__note">Dibaca, disimpan, diceritakan kembali.</span>
              </div>
            </div>
          <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
            <img
              className="rounded-lg-3 img-fluid"
              src="https://upload.wikimedia.org/wikipedia/id/8/8e/Laskar_pelangi_sampul.jpg?utm_source=id.wikipedia.org&utm_campaign=parser&utm_content=thumbnail_unscaled"
              alt="Bootstrap docs"
              width="720"
            />
          </div>
        </div>
      </div>
      <Cardgrid />
    </>
  );
}

function App() {
  const [activePage, setActivePage] = useState('home');

  const renderPage = () => {
    switch (activePage) {
      case 'team':
        return <TeamPage />;
      case 'contact':
        return <ContactPage />;
      case 'home':
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="App">
      <NavbarComponent currentPage={activePage} onNavigate={setActivePage} />
      {renderPage()}
      <Footer />
    </div>
  );
}

export default App;