import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Card, Alert } from "react-bootstrap";
import { Plus, User, FolderOpen, AlertTriangle } from "lucide-react";
import "./App.css";
import CreationModal from "./components/Presentation/CreationModal";
import PresentationCard from "./components/Presentation/Card";
import MOCK_PRESENTATIONS from "./components/Presentation/mock_presentations";

function idGenerator() {
  return Math.random().toString(36).substring(2, 9);
}

function App() {
  const [presentations, setPresentations] = useState(MOCK_PRESENTATIONS);
  const [showModal, setShowModal] = useState(false);

  const handleCreateNew = ({ nickname, title }) => {
    const newPres = {
      id: idGenerator(),
      title,
      creator: nickname,
      slides: 1,
      lastUpdated: "Just now",
    };
    setPresentations((prev) => [newPres, ...prev]);
  };

  return (
    <div className="min-vh-100">
      <Container fluid="xl" className="py-5">
        <Row className="align-items-center mb-5 gap-4">
          <Col>
            <h1 className="fw-bold text-dark mb-1 d-flex">
              <FolderOpen size={36} className="me-3 text-primary" /> PresentFlow
            </h1>
            <p className="text-secondary mb-0">
              Create and manage collaborative slide decks in real time.
            </p>
          </Col>
          <Col xs="auto">
            <Button
              variant="primary"
              size="lg"
              className="shadow create-btn"
              onClick={() => setShowModal(true)}
            >
              <Plus size={20} className="me-2" />
              New Presentation
            </Button>
          </Col>
        </Row>
        <h4 className="mb-4">Recent Presentations</h4>
        <Row>
          {presentations.length > 0 ? (
            presentations.map((p) => (
              <PresentationCard key={p.id} presentation={p} />
            ))
          ) : (
            <Col>
              <Alert variant="info" className="text-center shadow-sm">
                <AlertTriangle size={20} className="me-2" />
                No presentations found. Click “New Presentation” to start!
              </Alert>
            </Col>
          )}
        </Row>
      </Container>

      <CreationModal
        show={showModal}
        handleClose={() => setShowModal(false)}
        handleCreate={handleCreateNew}
      />
    </div>
  );
}

export default App;
