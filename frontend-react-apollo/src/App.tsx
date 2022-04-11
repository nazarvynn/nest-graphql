import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Users from "./pages/users/Users";

import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/users" element={<Users />} />
        <Route path="/" element={<Navigate replace to="/users" />} />
      </Routes>
    </Router>
  );
}

export default App;
