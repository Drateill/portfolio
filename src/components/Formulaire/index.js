import preact from "preact";
import { Link } from "preact-router/match";
import style from "./style";

const Formulaire = () => (
  
  <form class={style.form}>

      <input type="text" class={style.name} placeholder="Votre Nom" />

      <input type="email" class={style.mail} placeholder="Votre adresse E-Mail" />  

      <textarea class={style.message} rows="3" placeholder=" Vous : 'Vous sembez tellement douée et fantaisiste que je souhaite vous prendre dans mon équipe de super dev!'"></textarea>
      
      <button type="button" class={"btn btn-lg btn-block " + style.button}>Envoyez votre message</button>
  
  </form>
 
);

export default Formulaire;