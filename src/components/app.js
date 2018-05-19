import { h, Component } from "preact";
import { Router } from "preact-router";

import LiquidRoute, { PushAndSlide } from 'liquid-route';
import 'liquid-route/style.css';



import Menu from "./Menu";
import Footer from "./Footer";

import Home from "../routes/home";
import Competences from "../routes/competences";
import Realisations from "../routes/realisations";
import Contact from "../routes/contact";


if (module.hot) {
  require("preact/debug");
}

class App extends Component {
  handleRoute = e => {
    this.currentUrl = e.url;
  };

  render() {
    console.dir(PushAndSlide)
    return (
      <div id="app">
        <Menu />

        <div class="container">
          <Router onChange={this.handleRoute}>
            <LiquidRoute animator={PushAndSlide} path="/" component={Home}/>

            <LiquidRoute animator={PushAndSlide} path="/competences" component={Competences}/>

            <LiquidRoute animator={PushAndSlide} path="/realisations" component={Realisations}/>

            <LiquidRoute animator={PushAndSlide} path="/contact" component={Contact}/>
          </Router>
        </div>

        <Footer />
      </div>
    );
  }
}

export default App;
