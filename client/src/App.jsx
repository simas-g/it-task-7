import { useState } from "react";
import { Container, Row, Col, Button, Alert } from "react-bootstrap";
import {
  Plus,
  FolderOpen,
  AlertTriangle,
  Loader2,
  Table,
  LayoutGrid,
} from "lucide-react";
import "./App.css";
import CreationModal from "./components/Presentation/CreationModal";
import PresentationCard from "./components/Presentation/View/Card";
import { useQuery } from "@tanstack/react-query";
import { getPresentations } from "./lib/getPresentations";
import { formatRelativeTime } from "./lib/formatTime";
import TableView from "./components/Presentation/View/Table/TableView";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [viewMode, setViewMode] = useState("gallery");

  const {
    data: fetchedPresentations = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["presentations"],
    queryFn: getPresentations,
  });

  const header = (
    <Row className="align-items-center mb-5 gap-4">
      <Col>
        <h1 className="fw-bold text-dark mb-1 d-flex">
          <FolderOpen size={36} className="me-3 mt-1 mt-md-2 text-primary" />{" "}
          PresentFlow
        </h1>
        <p className="text-secondary mb-0">
          Create and manage collaborative slide decks in real time.
        </p>
      </Col>
      <Col xs="auto" className="d-flex gap-4">
        <div className="d-none d-md-flex p-1 rounded-3">
          <button
            title="Table View"
            className={`btn d-flex align-items-center p-2 ${
              viewMode === "table" ? "active-view" : ""
            }`}
            onClick={() => setViewMode("table")}
          >
            <Table size={20} />
          </button>
          <button
            title="Gallery View"
            className={`btn p-2 d-flex align-items-center ${
              viewMode === "gallery" ? "active-view" : ""
            }`}
            onClick={() => setViewMode("gallery")}
          >
            <LayoutGrid size={20} />
          </button>
        </div>
        <Button
          variant="primary"
          size="lg"
          className="shadow create-btn fs-6"
          onClick={() => setShowModal(true)}
        >
          <Plus size={20} className="me-2" />
          New Presentation
        </Button>
      </Col>
    </Row>
  );

  return (
    <div className="vh-100">
      <Container fluid="xl" className="py-5">
        {header}
        <h4 className="mb-4">Recent Presentations</h4>

        {isLoading ? (
          <div className="text-center">
            <Loader2 size={24} className="me-2 text-primary spin" />
            <p>Loading presentations...</p>
          </div>
        ) : isError ? (
          <Alert variant="danger" className="shadow-sm">
            <AlertTriangle size={20} className="me-2" />
            Failed to load presentations: {error.message}.
          </Alert>
        ) : fetchedPresentations.length > 0 ? (
          viewMode === "gallery" ? (
            <Row>
              {fetchedPresentations.map((p) => (
                <PresentationCard key={p.id} presentation={p} />
              ))}
            </Row>
          ) : (
            <TableView
              columns={[
                { key: "title", label: "Title" },
                { key: "creator", label: "Creator" },
                { key: "slides", label: "Slides" },
                { key: "lastUpdated", label: "Last Updated" },
                {
                  label: "Action",
                  type: "Link",
                },
              ]}
              data={fetchedPresentations.map((p) => ({
                id: p._id,
                title: p.name,
                creator: p.creator_nickname,
                slides: p.slides.length,
                lastUpdated: formatRelativeTime(p.updatedAt),
                action: "Edit",
              }))}
            ></TableView>
          )
        ) : (
          <Alert variant="info" className="text-center shadow-sm">
            <AlertTriangle size={20} className="me-2" />
            No presentations found. Click “New Presentation” to start!
          </Alert>
        )}

        <CreationModal
          show={showModal}
          handleClose={() => setShowModal(false)}
        />
      </Container>
    </div>
  );
}

export default App;
