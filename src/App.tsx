
import "./App.css";

import { Route, Router } from "wouter";
import HomePage from "./pages/HomePage";
import LearnPage from "./pages/LearnPage";

function App() {
  return (
    <>
      <Router>
        <Route path="/">
          <HomePage />
        </Route>
        <Route path="/learn">
          <LearnPage />
        </Route>
      </Router>
    </>
  );
}

export default App

