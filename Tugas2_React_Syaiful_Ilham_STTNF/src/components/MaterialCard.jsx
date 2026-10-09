import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function MaterialCard({ material }) {
  return (
    <Card className="book-card h-100">
      <div className="book-card__cover">
        <div className="book-card__fallback" aria-hidden="true">
          <span>{material.author}</span>
          <strong>{material.title}</strong>
        </div>
        {material.image && (
          <img
            src={material.image}
            alt={`Sampul buku ${material.title} karya ${material.author}`}
            loading="lazy"
            onError={(event) => event.currentTarget.remove()}
          />
        )}
      </div>
      <Card.Body className="d-flex flex-column p-4">
        <span className="book-card__category">{material.year}</span>
        <Card.Title className="book-card__title mt-2">{material.title}</Card.Title>
        <Card.Text className="book-card__author">oleh {material.author}</Card.Text>
        <Card.Text className="text-muted small">{material.description}</Card.Text>
        <div className="d-flex justify-content-end mt-auto pt-3">
          <Button as={Link} to={`/buku/${material.id}`} variant="outline-dark" size="sm">
            Lihat buku
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default MaterialCard;