import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";

// Components
import Home from "./Components/Home";
import Business from "./Components/Business";
import Register from "./Components/Register";
import Login from "./Components/Login";
import Search from "./Components/Search";

// Contexts
import { BusinessContext } from "./Components/Contexts/BusinessContext";

function App() {
  const [business, setBusiness] = useState(
    JSON.parse(localStorage.getItem("business")) || {}
  );

  return (
    <Container fluid className="App text-light text-center">
      <BusinessContext.Provider value={{ business, setBusiness }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/business" element={<Business />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </BusinessContext.Provider>
    </Container>
  );
}

export default App;
