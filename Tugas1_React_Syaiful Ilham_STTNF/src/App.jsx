import { useState } from 'react';
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
          <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
            <h1 className="display-4 fw-bold lh-1 text-body-emphasis">Kelas React JS Asik</h1>
            <p className="lead">
              Ayo kita belajar React JS, React JS adalah library JavaScript yang digunakan untuk membangun antarmuka pengguna (user interface) yang interaktif dan responsif. React JS dikembangkan oleh Facebook dan dirilis sebagai open-source pada tahun 2013.
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
              <button type="button" className="btn btn-primary btn-lg px-4 me-md-2 fw-bold">
                Pelajari
              </button>
              <button type="button" className="btn btn-outline-secondary btn-lg px-4">
                Info Lebih Lanjut
              </button>
            </div>
          </div>
          <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
            <img
              className="rounded-lg-3 img-fluid"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5iXbI9Yy6RUJSrbzKW9LVhjajpxb01cuKmUp6Sdd4fmiOyGevjsPNyvQ&s=10"
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