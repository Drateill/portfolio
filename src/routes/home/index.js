import { h } from "preact";
import style from "./style.scss";

const Home = () => (
  <main>
    <div class="row">
      <div class="col-12 text-center">
        <h1><span>M</span>ylène <span>V</span>andaële</h1>
      </div>
      
      <div class={style.photo + " col-sm-6 col-md-4 offset-md-2"} >
        <img class={style.photo + " img-fluid"} src="../assets/img/photo-nb.jpg" />
      </div>
      
      <div class={style.title + " col-sm-6 col-md-4"}>
        <h2 class="align-middle">Développeuse<br /> intégratrice<br />front-end</h2>
      </div>

      
      <div class="col-12 text-center">
        <p>lorem ipsum</p>
      </div>

      <div class="col-sm-6 col-md-3 offset-md-3">
        <button type="button" class="btn btn-dark">Me contacter</button>
      </div>

      <div class="col-sm-6 col-md-3">
        <button type="button" class="btn btn-dark">Qui suis-je ?</button>
      </div>

    </div>
  </main>
);

export default Home;
