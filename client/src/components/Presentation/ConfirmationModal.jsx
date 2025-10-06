import { Form, Modal } from "react-bootstrap";
import { InputGroup, Button } from "react-bootstrap";
import { Users, FileText, Plus } from "lucide-react";

export function ConfirmationModal({ show, handleClose }) {
  return (
    <Modal centered show={show} onHide={handleClose}>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3 mt-2">
            <Form.Label>Your Nickname</Form.Label>
            <InputGroup>
              <InputGroup.Text className="bg-light border-end-0">
                <Users size={18} className="text-primary" />
              </InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Enter your nickname"
                required
                className="border-start-0"
              />
            </InputGroup>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleClose} variant="outline-secondary">
          Cancel
        </Button>
        <Button variant="primary d-flex align-items-center">
          <Plus size={16} className="me-2" />
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ConfirmationModal;
