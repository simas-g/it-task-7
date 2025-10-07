import { Button } from "react-bootstrap";
import { File, Globe, Share } from "lucide-react";
import { useContext } from "react";
import { PresentationContext } from "../../pages/PresentationPage";
import RoleBadge from "./RoleBadge";

export default function Header({ title }) {
  const { collaborator } = useContext(PresentationContext);

  return (
    <header className="d-flex justify-content-between align-items-center px-4 py-3 bg-white border-bottom shadow-sm">
      <div className="d-flex align-items-center gap-3 flex-wrap">
        <div className="d-flex gap-2">
          <File />
          <h5 className="mb-0 fw-bold text-dark">{title}</h5>
          {collaborator.role !== "owner" && (
            <RoleBadge role={collaborator.role} />
          )}
        </div>
      </div>

      <div className="d-flex align-items-center gap-2">
        <Button variant="primary" className="d-flex align-items-center gap-2">
          <Globe size={18} /> Present
        </Button>
        <Button variant="light" className="d-flex align-items-center gap-2">
          <Share size={18} /> Share
        </Button>
      </div>
    </header>
  );
}
