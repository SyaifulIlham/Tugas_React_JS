import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import './cardlist.css';

function Cardgrid() {
  return (
    <Container className="card-list py-3">
      <Row xs={1} sm={2} lg={3} className="g-4">
        {Array.from({ length: 6 }).map((_, idx) => (
          <Col key={idx}>
            <Card className="card-list__card h-100">
              <Card.Img
                variant="top"
                src="https://gpu.id/data-gpu/images/uploads/dirimg_buku/616153002.jpg"
                alt="Paris"
              />
              <Card.Body>
                <Card.Title>Buku baru</Card.Title>
                <Card.Text>
                  Buku baru yang akan segera hadir di toko kami. Tetap pantau untuk
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Cardgrid;