import { ListGroup, Button } from "react-bootstrap";
import { Plus } from "lucide-react";

export default function Sidebar({ slides, activeSlide, onSelect }) {
  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h6 className="fw-semibold text-secondary">Slides</h6>
        <Button
          size="sm"
          variant="outline-primary"
          className="d-flex align-items-center"
        >
          <Plus size={16} />
        </Button>
      </div>
      <ListGroup>
        {slides.map((s) => (
          <ListGroup.Item
            key={s.id}
            active={s.id === activeSlide?.id}
            action
            onClick={() => onSelect(s)}
          >
            <strong>{s.title}</strong>
            <div className="small text-muted text-truncate">{s.content}</div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}
