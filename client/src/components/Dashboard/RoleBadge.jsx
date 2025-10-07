import { Badge } from "react-bootstrap";
import { Crown, Eye, Pen } from "lucide-react";

export default function RoleBadge({ role }) {
  const normalizedRole = role ? role.toLowerCase() : "viewer";
  const roleMap = {
    owner: {
      variant: "danger",
      icon: <Crown size={12} className="me-1" />,
      text: "Owner",
    },
    editor: {
      variant: "primary",
      icon: <Pen size={12} className="me-1" />,
      text: "Editor",
    },
    viewer: {
      variant: "secondary",
      icon: <Eye size={12} className="me-1" />,
      text: "Viewer",
    },
  };
  const { variant, icon, text } = roleMap[normalizedRole] || roleMap["viewer"];
  return (
    <Badge
      bg={variant}
      className="d-inline-flex justify-content-center align-items-center fw-semibold px-2 py-1 rounded-pill"
      style={{ minWidth: "70px" }}
    >
      {icon}
      {text}
    </Badge>
  );
}
