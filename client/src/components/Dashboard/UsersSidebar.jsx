import { ListGroup } from "react-bootstrap";
import { changeUsersRole } from "../../lib/presentation";
import { useContext, useState } from "react";
import { PresentationContext } from "../../pages/PresentationPage";
import RoleBadge from "./RoleBadge";
export default function UsersSidebar({ users }) {
  const [newRole, setNewRole] = useState("");
  const [confirmation, setConfirmation] = useState("");
  const { collaborator } = useContext(PresentationContext);

  const { presentation } = useContext(PresentationContext);
  const handleChangeUserRole = async (username) => {
    await changeUsersRole(presentation._id, username, newRole);
  };
  const handleChange = (e) => {
    const role = e.target.value;
    setNewRole(role);
  };
  return (
    <ListGroup>
      <p className="text-center mb-4 mt-2">Collaborators ({users?.length})</p>
      {users.map((u) => (
        <div className="border-bottom p-1 px-4 py-1">
          <strong className="text-truncate">
            {u.nickname}
            {u.role === "owner" && (
              <>
                {" "}
                (you) <RoleBadge role={collaborator.role} />
              </>
            )}
          </strong>
          <div className="small text-muted text-truncate">{u.role}</div>
        </div>
      ))}
    </ListGroup>
  );
}
