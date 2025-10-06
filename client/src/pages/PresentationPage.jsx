import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router";
import Header from "../components/Dashboard/Header";
import Sidebar from "../components/Dashboard/Sidebar";
import Editor from "../components/Dashboard/Editor";
import { getPresentations } from "../lib/getPresentations";
import fetchPresentationById from "../lib/fetchPresentationById";

export default function PresentationPage() {
  const { id } = useParams();
  const [presentation, setPresentation] = useState(null);
  const [activeSlide, setActiveSlide] = useState(null);

  useEffect(() => {
    async function fetchPresentation() {
      const presentation = await fetchPresentationById(id);
      console.log(presentation, "pres");
      setPresentation(presentation);
      setActiveSlide(presentation.slides[0]);
    }
    fetchPresentation();
  }, [id]);

  if (!presentation) return <div className="text-center p-5">Loading...</div>;

  return (
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
        <Col className="p-4 d-flex justify-content-center align-items-center">
          <Editor slide={activeSlide} onUpdate={setActiveSlide} />
        </Col>
      </Row>
    </Container>
  );
}
