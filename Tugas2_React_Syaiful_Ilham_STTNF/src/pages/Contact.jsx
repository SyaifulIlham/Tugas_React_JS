import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';

function ContactPage() {
  return (
    <main>
      <Container className="page-shell py-5">
        <div className="section-heading text-center mb-5">
          <p className="eyebrow">Hubungi Worthbook</p>
          <h1 className="fw-bold">Ada yang ingin ditanyakan?</h1>
        </div>
        <Row className="g-4 align-items-stretch">
          <Col lg={5}>
            <div className="contact-panel h-100">
              <h2 className="h3 mb-4">Informasi kontak</h2>
              <ListGroup variant="flush" className="contact-list">
                <ListGroup.Item><strong>Email</strong><div>hello@worthbook.co</div></ListGroup.Item>
                <ListGroup.Item><strong>Telepon</strong><div>+62 812-3456-7890</div></ListGroup.Item>
                <ListGroup.Item><strong>Alamat</strong><div>Jl. Merdeka No. 12, Jakarta Selatan</div></ListGroup.Item>
              </ListGroup>
            </div>
          </Col>
          <Col lg={7}>
            <div className="contact-panel h-100 p-4">
              <Form className="contact-form">
                <Row className="g-3">
                  <Col md={6}>
                    <Form.Group controlId="contact-name">
                      <Form.Label>Nama</Form.Label>
                      <Form.Control type="text" placeholder="Masukkan nama Anda" required />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="contact-email">
                      <Form.Label>Email</Form.Label>
                      <Form.Control type="email" placeholder="email@contoh.com" required />
                    </Form.Group>
                  </Col>
                  <Col xs={12}>
                    <Form.Group controlId="contact-subject">
                      <Form.Label>Subjek</Form.Label>
                      <Form.Control type="text" placeholder="Topik pesan Anda" required />
                    </Form.Group>
                  </Col>
                  <Col xs={12}>
                    <Form.Group controlId="contact-message">
                      <Form.Label>Pesan</Form.Label>
                      <Form.Control as="textarea" rows={5} placeholder="Tuliskan kebutuhan Anda" required />
                    </Form.Group>
                  </Col>
                  <Col xs={12}><Button type="submit" className="px-4">Kirim Pesan</Button></Col>
                </Row>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </main>
  );
}

export default ContactPage;
