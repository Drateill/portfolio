import { h, Component } from "preact";
import { Router } from "preact-router";

import Menu from "./Menu";
import Home from "../routes/home";
import Realisations from "../routes/Realisations";

if (module.hot) {
  require("preact/debug");
}

class App extends Component {
  handleRoute = e => {
    this.currentUrl = e.url;
  };

  render() {
    return (
      <div id="app">
        <Menu />
        <div class="container-fluid">
          <Router onChange={this.handleRoute}>
            <Home path="/" />
            <Realisations path="/realisations" />
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
