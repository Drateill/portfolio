import preact from "preact";
import { Link } from "preact-router/match";
import style from "./style";

const Formulaire = () => (
  <form class={style.form}>
    <input type="text" class={style.name} placeholder="Votre Nom" />

    <input type="email" class={style.mail} placeholder="Votre adresse E-Mail" />  

    <textarea class={style.message} rows="5" placeholder=" Vous : 'Vous sembez tellement douée, créative et géniale que mon équipe de super dev' ne saurait se passer de vous!"></textarea>
    
    <button type="button" class={style.button}>Envoyez votre message</button>
  </form>
);

export default Formulaire;