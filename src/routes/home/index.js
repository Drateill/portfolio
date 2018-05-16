import { h } from "preact";
import style from "./style.scss";

const Home = () => (
  <main>
    <div class="row">
      <div class="col-12 text-center">
        <h1><span>M</span>ylène <span>V</span>andaële</h1>
      </div>

      <div class="col-6">
        <img class={style.photo + " img-fluid"} src="../assets/img/photo-nb.jpg" />
      </div>

      <div class="col-6">
        <h2>Développeuse <br /> intégratrice front-end</h2>
        <p>Moi je ne crois pas qu'il y ait de bonne ou de mauvaise situations, mais si je devais résumer ma vie avec vous, je dirais que c'est d'abord des rencontres!</p>
      </div>

    </div>
  </main>
);

export default Home;
