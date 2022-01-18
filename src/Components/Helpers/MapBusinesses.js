import React from "react";
import { CardGroup, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function MapBusinesses({ businesses, onClick }) {
  return (
    <CardGroup>
      {businesses.map((b, i) => {
        return (
          <Card key={i} className="mt-3 mb-3">
            <Card.Body>
              <h3 className="text-dark">{b.name}</h3>
            </Card.Body>
            <Card.Footer>
              <Link
                to="/business"
                className="btn btn-secondary"
                onClick={(e) => onClick(e, b)}
              >
                view
              </Link>
            </Card.Footer>
          </Card>
        );
      })}
    </CardGroup>
  );
}

export default MapBusinesses;
