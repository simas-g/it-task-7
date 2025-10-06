import { ListGroup, Button } from "react-bootstrap";
import { Plus } from "lucide-react";

export default function Sidebar({ slides, activeSlide, onSelect }) {
  return (
    <div>
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
