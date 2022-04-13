import React from "react";
import { RelayEnvironmentProvider } from "react-relay/hooks";
import RelayEnvironment from "./RelayEnvironment";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Users from "./pages/users/Users";

function App() {
  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <Router>
        <Routes>
          <Route path="/users" element={<Users />} />
          <Route path="/" element={<Navigate replace to="/users" />} />
        </Routes>
      </Router>
    </RelayEnvironmentProvider>
  );
}

export default App;
