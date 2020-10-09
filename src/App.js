import React from "react";
import PsiNavbar from "./components/common/navbar";
import SideBar from "./components/common/sidebar";
import psiLogo from "./PSI-white-logo.svg";
import { Home } from "./components/schedule-settings/schedule-tab";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <React.Fragment>
        <PsiNavbar logo={psiLogo} className="fixed" />
        <Router>
          <div className="d-flex">
            <SideBar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={Home} />
              <Route component={Home} />
            </Switch>
          </div>
        </Router>
      </React.Fragment>
    </div>
  );
}

export default App;
