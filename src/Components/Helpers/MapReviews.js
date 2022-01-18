import React from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
function MapReviews({ reviews, deleteReview }) {
  return (
    <Col md={{ span: 6, offset: 3 }}>
      <Row className="mt-5">
        <Col>
          {reviews.map((r, rIndex) => {
            return (
              <Card key={rIndex} className="mt-3 mb-3">
                <Card.Body>
                  {[...Array(r.rating)].map((s, sIndex) => {
                    return (
                      <i key={sIndex} className="fas fa-star text-warning" />
                    );
                  })}
                  <h3 className="text-dark">{r.description}</h3>
                </Card.Body>
                <Card.Footer>
                  <Button
                    variant="danger"
                    onClick={(e) => deleteReview(e, rIndex)}
                  >
                    delete
                  </Button>
                </Card.Footer>
              </Card>
            );
          })}
        </Col>
      </Row>
    </Col>
  );
}

export default MapReviews;
