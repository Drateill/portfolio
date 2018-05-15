import preact from "preact";
import { Link } from "preact-router/match";
import style from "./style";

class Menu extends preact.Component {
  render() {
    return (
      <nav class={style.menu}>
        <Link activeClassName={style.active} class={style.menu__link} href="/">
          accueil
        </Link>
        <Link activeClassName={style.active} class={style.menu__link} href="/competences">
          compétences
        </Link>
        <Link activeClassName={style.active} class={style.menu__link} href="/realisations">
          réalisations
        </Link>
        <Link activeClassName={style.active} class={style.menu__link} href="/contact">
          contact
        </Link>
      </nav>
    );
  }
}

export default Menu;
