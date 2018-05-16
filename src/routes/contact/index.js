import { h } from "preact";
import style from "./style.scss";
import Formulaire from "../../components/Formulaire";


const Contact = () => (
  <main>
    <div class="row">
      <div class="col-6 offset-3">
        <Formulaire />
      </div>
    </div>
  </main>

);

export default Contact;