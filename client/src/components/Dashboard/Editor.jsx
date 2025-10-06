import { Form } from "react-bootstrap";

export default function Editor({ slide, onUpdate }) {
  if (!slide) return <p>Select a slide to start editing.</p>;

  const handleChange = (field, value) => {
    onUpdate((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div
      className="bg-white shadow rounded-4 p-4 w-100"
      style={{ maxWidth: 800 }}
    >
      <Form.Group className="mb-3">
        <Form.Control
          type="text"
          value={slide.title}
          onChange={(e) => handleChange("title", e.target.value)}
          className="fs-4 fw-bold border-0 border-bottom"
          placeholder="Slide Title..."
        />
      </Form.Group>
      <Form.Control
        as="textarea"
        rows={10}
        value={slide.content}
        onChange={(e) => handleChange("content", e.target.value)}
        placeholder="Write your content here..."
        className="border-0"
      />
    </div>
  );
}
