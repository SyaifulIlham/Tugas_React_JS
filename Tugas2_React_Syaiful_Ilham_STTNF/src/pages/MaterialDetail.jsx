import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { FaHeart } from 'react-icons/fa6';
import { Link, useParams } from 'react-router-dom';
import { books } from '../data/books';

function MaterialDetailPage() {
  const { slug } = useParams();
  const book = books.find((item) => item.slug === slug);
  const [favoriteSlugs, setFavoriteSlugs] = useState(() => new Set());
  const isFavorite = favoriteSlugs.has(slug);

  if (!book) {
    return (
      <main className="container page-shell py-5">
        <Alert variant="warning">
          Buku tidak ditemukan. <Link to="/">Lihat semua buku</Link>
        </Alert>
      </main>
    );
  }

  return (
    <main>
      <Container className="page-shell py-5">
        <Link to="/#buku" className="text-decoration-none">← Kembali ke koleksi buku</Link>
        <article className="book-detail mt-4">
          <div className="row align-items-center g-5">
            <div className="col-md-4">
              <div className="book-detail__cover">
                <div className="book-card__fallback" aria-hidden="true">
                  <span>{book.author}</span>
                  <strong>{book.title}</strong>
                </div>
                <img
                  src={`https://covers.openlibrary.org/b/isbn/${book.isbn}-L.jpg?default=false`}
                  alt={`Sampul buku ${book.title} karya ${book.author}`}
                  onError={(event) => event.currentTarget.remove()}
                />
              </div>
            </div>
            <div className="col-md-8">
              <span className="book-detail__category">{book.category}</span>
              <h1 className="display-5 fw-bold">{book.title}</h1>
              <p className="lead text-muted">oleh {book.author}</p>
              <section className="book-detail__synopsis" aria-labelledby="book-synopsis-heading">
                <h2 id="book-synopsis-heading" className="book-detail__section-title">Tentang buku ini</h2>
                <p className="book-detail__description">{book.description}</p>
              </section>
              <div className="book-detail__purchase">
                <p className="book-detail__price mb-0">{book.price}</p>
                <div className="d-flex flex-wrap gap-2 mt-3">
                  <Button
                    type="button"
                    variant={isFavorite ? 'danger' : 'outline-danger'}
                    aria-pressed={isFavorite}
                    aria-label={isFavorite ? 'Hapus dari favorit' : 'Simpan ke favorit'}
                    onClick={() => {
                      setFavoriteSlugs((previous) => {
                        const next = new Set(previous);
                        if (next.has(slug)) {
                          next.delete(slug);
                        } else {
                          next.add(slug);
                        }
                        return next;
                      });
                    }}
                  >
                    <FaHeart aria-hidden="true" className="me-2" />
                    {isFavorite ? 'Tersimpan di favorit' : 'Simpan ke favorit'}
                  </Button>
                  <Button as={Link} to="/#buku" variant="outline-dark">
                    Jelajahi buku lainnya
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </article>
      </Container>
    </main>
  );
}

export default MaterialDetailPage;
