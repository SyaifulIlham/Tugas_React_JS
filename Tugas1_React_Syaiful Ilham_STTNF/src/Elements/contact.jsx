import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';

function ContactPage() {
  return (
    <Container className="page-shell py-5">
      <div className="section-heading text-center mb-5">
        <p className="eyebrow">Contact us</p>
        <h2 className="fw-bold">Kami siap membantu kebutuhan Anda</h2>
      </div>

      <Row className="g-4 align-items-stretch">
        <Col lg={5}>
          <div className="contact-panel h-100">
            <h3 className="mb-4">Informasi kontak</h3>
            <ListGroup variant="flush" className="contact-list">
              <ListGroup.Item>
                <strong>Email</strong>
                <div>hello@worthbook.co</div>
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>Phone</strong>
                <div>+62 812-3456-7890</div>
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>Office</strong>
                <div>Jl. Merdeka No. 12, Jakarta Selatan</div>
              </ListGroup.Item>
            </ListGroup>
          </div>
        </Col>

        <Col lg={7}>
          <div className="contact-panel h-100 p-4">
            <Form className="contact-form">
              <Row className="g-3">
                <Col md={6}>
                  <Form.Group>
                    <Form.Label>Nama</Form.Label>
                    <Form.Control type="text" placeholder="Masukkan nama Anda" />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="email@contoh.com" />
                  </Form.Group>
                </Col>
                <Col xs={12}>
                  <Form.Group>
                    <Form.Label>Subjek</Form.Label>
                    <Form.Control type="text" placeholder="Topik pesan Anda" />
                  </Form.Group>
                </Col>
                <Col xs={12}>
                  <Form.Group>
                    <Form.Label>Pesan</Form.Label>
                    <Form.Control as="textarea" rows={5} placeholder="Tuliskan kebutuhan Anda" />
                  </Form.Group>
                </Col>
                <Col xs={12}>
                  <Button type="submit" className="px-4">
                    Kirim Pesan
                  </Button>
                </Col>
              </Row>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default ContactPage;