import { createContext, useContext, useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { RouterContextProvider, useParams } from "react-router";
import Header from "../components/Dashboard/Header";
import Sidebar from "../components/Dashboard/SlidesSidebar";
import Editor from "../components/Dashboard/Editor";
import fetchPresentationById, { assignCollaborator } from "../lib/presentation";
import UsersSidebar from "../components/Dashboard/UsersSidebar";

const PresentationContext = createContext();
export { PresentationContext };

export default function PresentationPage() {
  const { id, username } = useParams();
  const [presentation, setPresentation] = useState(null);
  const [activeSlide, setActiveSlide] = useState(null);
  const [collaborator, setCollaborator] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchPresentation() {
      const presentation = await fetchPresentationById(id);
      setPresentation(presentation);
      const collaborator = presentation.collaborators.find(
        (c) => c.nickname === username
      );
      const name = username;
      if (!collaborator) {
        await assignCollaborator(name, presentation._id);
        window.location.reload();
      }

      setCollaborator(collaborator);
      setActiveSlide(presentation.slides[0]);
      setLoading(false);
    }
    fetchPresentation();
  }, [id, collaborator, presentation]);
  const contextValue = {
    presentation,
    collaborator,
    activeSlide,
  };

  if (!presentation) return <div className="text-center p-5">Loading...</div>;

  return (
    <PresentationContext value={contextValue}>
      <Container fluid className="vh-100 d-flex flex-column bg-light p-0">
        <Header title={presentation.name} />
        <Row className="flex-grow-1 m-0">
          <Col xs={3} className="bg-white border-end p-3 overflow-auto">
            <Sidebar
              slides={presentation.slides}
              activeSlide={activeSlide}
              onSelect={setActiveSlide}
            />
          </Col>
          <Col className="p-4 d-flex gap-4 justify-content-center flex-column align-items-center">
            <Editor slide={activeSlide} onUpdate={setActiveSlide} />
          </Col>
          {collaborator.role === "owner" && (
            <Col
              xs={3}
              xl={2}
              className="bg-white border-start p-3 overflow-auto"
            >
              <UsersSidebar users={presentation.collaborators}></UsersSidebar>
            </Col>
          )}
        </Row>
      </Container>
    </PresentationContext>
  );
}
