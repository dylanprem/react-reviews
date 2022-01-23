import React from "react";
import { Row, Col, Form, Button } from "react-bootstrap";

function AddReview({
  stars,
  setStars,
  clicked,
  setClicked,
  review,
  setReview,
  submitReview,
  resetForm,
}) {
  const onMouseOver = (rating) => {
    if (clicked) return;
    [...Array(rating)].map((x, i) => {
      return document
        .querySelector(`#star-${i + 1}`)
        .classList.replace("far", "fas");
    });
  };
  const onMouseOut = (rating) => {
    if (clicked) return;
    [...Array(rating)].map((x, i) => {
      return document
        .querySelector(`#star-${i + 1}`)
        .classList.replace("fas", "far");
    });
  };
  const onClick = (rating) => {
    setClicked(true);
    setStars(rating);

    // Reset stars
    [...Array(5)].map((x, i) => {
      return document
        .querySelector(`#star-${i + 1}`)
        .classList.replace("fas", "far");
    });

    // Highlight
    [...Array(rating)].map((x, i) => {
      return document
        .querySelector(`#star-${i + 1}`)
        .classList.replace("far", "fas");
    });
  };

  return (
    <Col md={{ span: 6, offset: 3 }}>
      <Row className="mt-5">
        <Col>
          {[...Array(5)].map((s, i) => {
            return (
              <i
                key={i}
                className="far fa-star display-4"
                onMouseOver={(e) => onMouseOver(i + 1)}
                onMouseOut={(e) => onMouseOut(i + 1)}
                onClick={(e) => onClick(i + 1)}
                id={`star-${i + 1}`}
                style={{ cursor: "pointer" }}
              />
            );
          })}
        </Col>
      </Row>
      <Row className="mt-5">
        <Col>
          <Form.Group>
            <Form.Control
              as="textarea"
              rows={3}
              value={review}
              onChange={(e) => setReview(e.target.value)}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col>
          <Button variant="warning" onClick={(e) => resetForm(e)}>
            reset
          </Button>{" "}
          <Button
            variant="success"
            disabled={review === ""}
            onClick={(e) => submitReview(e)}
          >
            submit
          </Button>
        </Col>
      </Row>
    </Col>
  );
}

export default AddReview;
