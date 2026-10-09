import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { books } from '../data/books';
import MaterialCard from './MaterialCard';

function MaterialGrid() {
  return (
    <Container className="book-grid py-4 py-lg-5">
      <div className="section-heading text-center">
        <p className="eyebrow">Pilihan Worthbook</p>
        <h2 className="fw-bold">Cerita Indonesia, untuk semua pembaca</h2>
        <p className="text-muted section-copy mx-auto">
          Temukan novel dan karya pilihan penulis Indonesia yang layak menemani rak bukumu.
        </p>
      </div>
      <Row xs={1} sm={2} lg={3} className="g-4">
        {books.map((book) => (
          <Col key={book.slug}>
            <MaterialCard material={book} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default MaterialGrid;
