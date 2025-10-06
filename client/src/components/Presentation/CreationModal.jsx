import { useState } from "react";
import { Modal, Form, InputGroup, Button } from "react-bootstrap";
import { Users, FileText, Plus } from "lucide-react";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { postPresentation } from "../../lib/postPresentation";
function CreationModal({ show, handleClose }) {
  const [nickname, setNickname] = useState("");
  const [title, setTitle] = useState("");
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: ({ nickname, title }) => postPresentation(nickname, title),
    onSuccess: () => {
      setNickname("");
      setTitle("");
      handleClose();
      queryClient.invalidateQueries(["presentations"]);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nickname || !title) return;
    mutation.mutate({ nickname, title });
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3 mt-2">
            <Form.Label>Your Nickname</Form.Label>
            <InputGroup>
              <InputGroup.Text className="bg-light border-end-0">
                <Users size={18} className="text-primary" />
              </InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Enter your nickname"
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
                required
                className="border-start-0"
              />
            </InputGroup>
          </Form.Group>

          <Form.Group>
            <Form.Label>Presentation Title</Form.Label>
            <InputGroup>
              <InputGroup.Text className="bg-light border-end-0">
                <FileText size={18} className="text-primary" />
              </InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="e.g. Quarterly Review"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                className="border-start-0"
              />
            </InputGroup>
          </Form.Group>
        </Form>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="outline-secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button
          variant="primary d-flex align-items-center"
          onClick={handleSubmit}
          disabled={!nickname || !title || mutation.isLoading}
        >
          <Plus size={16} className="me-2" />
          {mutation.isLoading ? "Creating..." : "Create"}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default CreationModal;
