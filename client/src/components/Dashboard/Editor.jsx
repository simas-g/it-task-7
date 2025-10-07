import {
  RotateCcw,
  RotateCw,
  Save,
  PlusCircle,
  Square,
  ZoomIn,
  ChevronLeft as PrevSlide,
  ChevronRight,
  ZoomOut,
  Plus,
  Text,
  Image,
  Circle,
  Triangle,
} from "lucide-react";

import { Form, Row, Dropdown, Col, Button } from "react-bootstrap";

const utilityButtons = [
  { id: "prev", Icon: PrevSlide, title: "Previous slide" },
  { id: "next", Icon: ChevronRight, title: "Next slide" },
  { id: "sep1", separator: true },
  { id: "zoomOut", Icon: ZoomOut, title: "Zoom out" },
  { id: "zoomIn", Icon: ZoomIn, title: "Zoom in" },
  { id: "addSlide", Icon: Plus, title: "Add a slide" },
  { id: "sep2", separator: true },
  { id: "undo", Icon: RotateCcw, title: "Undo" },
  { id: "redo", Icon: RotateCw, title: "Redo" },
];

const addElementItems = [
  { label: "Text Box", Icon: Text, type: "text" },
  { label: "Image", Icon: Image, type: "image" },
  { label: "Rectangle", Icon: Square, type: "shape_rectangle" },
  { label: "Circle", Icon: Circle, type: "shape_circle" },
  { label: "Triangle", Icon: Triangle, type: "shape_triangle" },
];

export default function Editor({ slide }) {
  if (!slide) return <p>Select a slide to start editing.</p>;
  const handleButtonClick = (id) => {
    console.log(`Button clicked: ${id}`);
  };

  const handleAddItem = (type) => {
    console.log(`Adding new element: ${type}`);
  };

  return (
    <>
      <Row className="p-2 border rounded g-0 align-items-center mx-0 d-flex gap-4">
        <Col className="d-flex align-items-center gap-2">
          {utilityButtons.map((btn) =>
            btn.separator ? (
              <div key={btn.id} className="vr mx-1" />
            ) : (
              <Button
                key={btn.id}
                variant="light"
                title={btn.title}
                onClick={() => handleButtonClick(btn.id)}
                className="d-flex align-items-center justify-content-center p-2"
              >
                <btn.Icon size={18} />
              </Button>
            )
          )}
        </Col>

        <Col xs="auto" className="d-flex gap-2 me-4 align-items-center">
          <Dropdown>
            <Dropdown.Toggle
              variant="outline"
              id="dropdown-add-item"
              size="sm"
              className="d-flex align-items-center"
            >
              <PlusCircle size={18} className="me-1" />
              Add Element
            </Dropdown.Toggle>

            <Dropdown.Menu className="mt-1">
              {addElementItems.map((item) => (
                <Dropdown.Item
                  key={item.type}
                  onClick={() => handleAddItem(item.type)}
                >
                  <item.Icon size={16} className="me-2" /> {item.label}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </Col>

        {/* 3. Save Button */}
        <Col xs="auto" className="d-flex justify-content-end">
          <Button
            variant="primary"
            className="d-flex align-items-center"
            onClick={() => handleButtonClick("save")}
          >
            <Save size={16} className="me-1" /> Save
          </Button>
        </Col>
      </Row>

      {/* --- EDITOR CONTENT (Canvas Area) --- */}
      <div
        className="bg-white border rounded-4 p-4 w-100 h-100"
        style={{ maxWidth: 800 }}
      >
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            value={slide.title}
            className="fs-4 fw-bold border-0 border-bottom"
            placeholder="Slide Title..."
          />
        </Form.Group>
        <Form.Control
          as="textarea"
          rows={10}
          value={slide.content}
          placeholder="Write your content here..."
          className="border-0"
        />
      </div>
    </>
  );
}
