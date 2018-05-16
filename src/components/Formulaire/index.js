import preact from "preact";
import { Link } from "preact-router/match";
import style from "./style";

const Formulaire = () => (
  
  <form>
    <div class="form-group">

      <label for="name">Votre Nom :</label>
      <input class="form-control" type="text" placeholder="Name" />

      <label for="mail">Votre adresse E-Mail :</label>
      <input type="email" class="form-control" aria-describedby="emailHelp" placeholder="E-Mail" />  

      <label for="message">Votre message :</label>
      <textarea class="form-control" rows="3" placeholder=" Vous : 'Vous sembez tellement douée et fantaisiste que je souhaite vous prendre dans mon équipe de super dev!'"></textarea>
      
      <button type="button" class="btn btn-dark btn-lg btn-block">Envoyez votre message</button>
    </div>
  
  </form>
 
);

export default Formulaire;