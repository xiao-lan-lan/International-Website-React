import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route,Redirect } from "react-router-dom";
import Layout from "./pages/layout";

function App() {
  return (
    <div className="App">
      <Router>
        <Route
          path=""
          render={() => {
            return <Redirect to="/home" />;
          }}
        />
        <Route path="/home" component={Layout} />
      </Router>
    </div>
  );
}

export default App;
