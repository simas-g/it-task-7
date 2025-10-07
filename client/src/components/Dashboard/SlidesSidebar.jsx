import { ListGroup } from "react-bootstrap";

export default function Sidebar({ slides, activeSlide, onSelect }) {
  return (
    <ListGroup>
      {slides.map((s) => (
        <ListGroup.Item
          key={s.id}
          active={s.id === activeSlide?.id}
          action
          onClick={() => onSelect(s)}
        >
          <strong>{s.name}</strong>
          <div className="w-50 h-50">{s.index}</div>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}
