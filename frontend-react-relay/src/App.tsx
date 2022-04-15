import React from "react";
import { RelayEnvironmentProvider } from "react-relay/hooks";
import RelayEnvironment from "./RelayEnvironment";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import UsersV1 from "./pages/users-v1/UsersV1";

function App() {
  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <Router>
        <Routes>
          <Route path="/users-v1" element={<UsersV1 />} />
          <Route path="/" element={<Navigate replace to="/users-v1" />} />
        </Routes>
      </Router>
    </RelayEnvironmentProvider>
  );
}

export default App;
