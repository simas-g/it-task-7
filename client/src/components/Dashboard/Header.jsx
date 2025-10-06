import { Button } from "react-bootstrap";
import {
  File,
  Globe,
  Save,
  Share,
  Plus,
  ZoomIn,
  ZoomOut,
  ChevronRight,
  ChevronLeft as PrevSlide,
} from "lucide-react";

export default function Header({
  title,
  onZoomIn,
  onZoomOut,
  onPrevSlide,
  onNextSlide,
}) {
  return (
    <header className="d-flex justify-content-between align-items-center px-4 py-3 bg-white border-bottom shadow-sm">
      <div className="d-flex align-items-center gap-3">
        <File />
        <h5 className="mb-0 fw-bold text-dark">{title}</h5>
      </div>

      <div className="d-flex align-items-center gap-2">
        <Button
          variant="light"
          className="d-flex align-items-center justify-content-center p-2"
          onClick={onPrevSlide}
        >
          <PrevSlide size={18} />
        </Button>
        <Button
          variant="light"
          className="d-flex align-items-center justify-content-center p-2"
          onClick={onNextSlide}
        >
          <ChevronRight size={18} />
        </Button>

        <Button
          variant="light"
          className="d-flex align-items-center justify-content-center p-2"
          onClick={onZoomOut}
        >
          <ZoomOut size={18} />
        </Button>
        <Button
          variant="light"
          className="d-flex align-items-center justify-content-center p-2"
          onClick={onZoomIn}
        >
          <ZoomIn size={18} />
        </Button>
        <Button
          variant="light"
          className="d-flex align-items-center justify-content-center p-2"
          onClick={onZoomIn}
        >
          <Plus size={18} />
        </Button>
      </div>

      <div className="d-flex align-items-center gap-2">
        <Button variant="primary" className="d-flex align-items-center gap-2">
          <Globe size={18} /> Present
        </Button>
        <Button variant="light" className="d-flex align-items-center gap-2">
          <Save size={18} /> Save
        </Button>
        <Button variant="light" className="d-flex align-items-center gap-2">
          <Share size={18} /> Share
        </Button>
      </div>
    </header>
  );
}
