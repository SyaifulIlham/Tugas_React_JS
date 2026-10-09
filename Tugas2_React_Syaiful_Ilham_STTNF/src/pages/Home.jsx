import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import MaterialGrid from '../components/MaterialGrid';

function HomePage() {
  return (
    <main>
      <Container fluid className="home-hero-container my-4 my-lg-5">
        <section className="home-hero p-3 p-lg-4 rounded-4">
          <div className="row align-items-center g-4">
            <div className="col-lg-7">
              <p className="eyebrow">Cerita Indonesia, dekat di hati</p>
              <h1 className="display-4 fw-bold lh-sm text-body-emphasis">
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
            <div className="col-lg-5">
              <div className="home-hero__visual" aria-label="Sampul buku Laskar Pelangi">
                <img
                  className="home-hero__image"
                  src="https://upload.wikimedia.org/wikipedia/id/8/8e/Laskar_pelangi_sampul.jpg?utm_source=id.wikipedia.org&utm_campaign=parser&utm_content=thumbnail_unscaled"
                  alt="Sampul novel Laskar Pelangi karya Andrea Hirata"
                />
                <div className="home-hero__image-caption">
                  <span>Yang selalu dirindukan</span>
                  <strong>Laskar Pelangi</strong>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Container>
      <div id="buku">
        <MaterialGrid />
      </div>
    </main>
  );
}

export default HomePage;
