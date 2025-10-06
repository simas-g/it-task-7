import { Button } from "react-bootstrap";
import { ChevronLeft, Globe, Save, Share } from "lucide-react";
import { useNavigate } from "react-router";

export default function Header({ title }) {
  const navigate = useNavigate();

  return (
    <header className="d-flex justify-content-between align-items-center px-4 py-3 bg-white border-bottom shadow-sm">
      <div className="d-flex align-items-center gap-3">
        <Button variant="" onClick={() => navigate(-1)}>
          <ChevronLeft size={18} />
        </Button>
        <h5 className="mb-0 fw-bold text-dark">{title}</h5>
      </div>
      <div className="d-flex align-items-center gap-2">
        <Button variant="primary" className="d-flex align-items-center gap-2">
          <Globe size={18} /> Present
        </Button>
        <Button variant="" className="d-flex align-items-center gap-2">
          <Save />
          Save
        </Button>

        <Button variant="" className="d-flex align-items-center gap-2">
          <Share size={22} />
        </Button>
      </div>
    </header>
  );
}
