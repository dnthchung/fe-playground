import { useState } from "react";
import { useProjects } from "../services/queries";
import { Container, Row, Col, Button, Spinner, Alert, ListGroup } from "react-bootstrap";

export default function Projects() {
  const [page, setPage] = useState(1);

  const { data, isPending, error, isError, isPlaceholderData, isFetching } = useProjects(page);

  return (
    <Container className="mt-4">
      <Row>
        <Col>
          {isPending ? (
            <div className="text-center">
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            </div>
          ) : isError ? (
            <Alert variant="danger">Error: {error.message}</Alert>
          ) : (
            <ListGroup>
              {data.map((project) => (
                <ListGroup.Item key={project.id}>{project.name}</ListGroup.Item>
              ))}
            </ListGroup>
          )}
        </Col>
      </Row>
      <Row className="mt-4">
        <span className="me-2">Current page: {page}</span>
        <Col className="text-center">
          <Button variant="secondary" className="me-2" onClick={() => setPage((old) => Math.max(old - 1, 1))}>
            Previous Page
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              if (!isPlaceholderData) {
                setPage((old) => old + 1);
              }
            }}
            disabled={isPlaceholderData}
          >
            Next Page
          </Button>
        </Col>
      </Row>
      <Row className="mt-2">
        <Col className="text-center">
          {isFetching && (
            <div>
              <Spinner animation="grow" size="sm" role="status" className="me-2">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
              Loading more projects...
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
}
