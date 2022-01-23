import { useState, useContext } from "react";
import { Col, Row, Button, Form } from "react-bootstrap";
import MapBusinesses from "./Helpers/MapBusinesses";
import { BusinessContext } from "./Contexts/BusinessContext";

function Search() {
  const [businesses, setBusinesses] = useState([
    {
      name: "McDonalds",
      id: "7fds8df7sd89f7ds8f",
    },
    {
      name: "taco bell",
      id: "d78as7d89asd7as89",
    },
  ]);
  const { business, setBusiness } = useContext(BusinessContext);

  const onClick = (e, obj) => {
    setBusiness(obj);
    localStorage.setItem("business", JSON.stringify(obj));
  };
  return (
    <Col md={{ span: 6, offset: 3 }}>
      <Row>
        <Form>
          <Form.Group>
            <Form.Label>Search businesses</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group>
            <Button>Search</Button>
          </Form.Group>
        </Form>
      </Row>
      <MapBusinesses businesses={businesses} onClick={onClick} />
    </Col>
  );
}

export default Search;
