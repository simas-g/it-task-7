import { User } from "lucide-react";
import { Button, Card, Col } from "react-bootstrap";

function PresentationCard({ presentation }) {
  const { title, creator, slides, lastUpdated } = presentation;

  return (
    <Col sm={12} md={6} lg={4} className="mb-4">
      <Card
        className="presentation-card border shadow-sm hover-card h-100"
        onClick={() => console.log(`Open: ${title}`)}
      >
        <Card.Body className="d-flex flex-column gap-2">
          <div className="d-flex justify-content-between align-items-start mb-2">
            <div className="d-flex align-items-center text-muted small">
              <User size={16} className="me-2 text-primary" />
              {creator}
            </div>
            <p className="small text-muted">{slides} Slides</p>
          </div>
          <Card.Title className="fs-5 fw-semibold text-dark mb-1 text-truncate">
            {title}
          </Card.Title>
          <Card.Text className="text-muted flex-grow-1 small">
            Click to edit or collaborate.
          </Card.Text>
          <div className="d-flex justify-content-between align-items-center pt-2 border-top mt-auto">
            <small className="text-secondary">{lastUpdated}</small>
            <Button size="sm" variant="link">
              Edit
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
}
export default PresentationCard;
