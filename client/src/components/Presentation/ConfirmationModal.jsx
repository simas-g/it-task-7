import { useState } from "react";
import { Form, Modal, InputGroup, Button } from "react-bootstrap";
import { Users, Plus } from "lucide-react";
import { useNavigate } from "react-router";

export function ConfirmationModal({ show, handleClose, presentationId }) {
  const [nickname, setNickname] = useState("");
  const navigate = useNavigate();

  const handleJoin = (e) => {
    e.preventDefault();
    if (!nickname.trim()) return;
    handleClose();
    const navPath = `/presentation/${presentationId}/${nickname}`;
    navigate(navPath);
  };

  return (
    <Modal centered show={show} onHide={handleClose}>
      <Form onSubmit={handleJoin}>
        <Modal.Header>
          <Modal.Title>Enter Nickname</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3 mt-2">
            <Form.Label>
              Enter your nickname to join the presentation.
            </Form.Label>
            <InputGroup>
              <InputGroup.Text className="bg-light border-end-0">
                <Users size={18} className="text-primary" />
              </InputGroup.Text>
              <Form.Control
                onChange={(e) => setNickname(e.target.value)}
                value={nickname}
                type="text"
                placeholder="your nickname"
                required
                className="border-start-0"
              />
            </InputGroup>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose} variant="outline-secondary">
            Cancel
          </Button>
          <Button
            type="submit"
            variant="primary d-flex align-items-center"
            disabled={!nickname.trim()}
          >
            Continue
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}

export default ConfirmationModal;
