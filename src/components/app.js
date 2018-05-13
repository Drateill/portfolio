import { h, Component } from "preact";
import { Router } from "preact-router";

import Menu from "./Menu";
import Home from "../routes/home";

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
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
