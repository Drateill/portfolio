import { h } from "preact";
import style from "./style.scss";
import Formulaire from "../../components/Formulaire";


const Contact = () => (
  <main>
    <div class="row">
      <div class="col-sm-12 col-md-6 offset-md-3">
        <Formulaire />
      </div>
    </div>
  </main>

);

export default Contact;