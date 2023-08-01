import { StyledHeader } from "./style";
import Twitter from "../../icons/Twitter";
import {
  Home,
  Explore,
  Notifications,
  Messages,
  Saved,
  Lists,
  Profile,
  Options,
} from "../../icons/NavIcons";
import More from "../../icons/More";
import santi from "../../assets/1689446184956.jpeg";

import { Verified } from "../../icons/TweetsIcons";

export const Nav = () => {
  return (
    <StyledHeader>
      <nav className="header__nav">
        <ul>
          <li className="header__list-element">
            <Twitter />
          </li>
          <a className="header__link" href="#">
            <li className="header__list-element">
              <Home />
              Inicio
            </li>
          </a>
          <a className="header__link" href="#">
            <li className="header__list-element">
              <Explore />
              Explorar
            </li>
          </a>
          <a className="header__link" href="#">
            <li className="header__list-element">
              <Notifications />
              Notificaciones
            </li>
          </a>
          <a className="header__link" href="#">
            <li className="header__list-element">
              <Messages />
              Mensajes
            </li>
          </a>
          <a className="header__link" href="#">
            <li className="header__list-element">
              <Lists />
              Listas
            </li>
          </a>
          <a className="header__link" href="#">
            <li className="header__list-element">
              <Saved />
              Guardados
            </li>
          </a>
          <a className="header__link" href="#">
            <li className="header__list-element">
              <Verified />
              Verificado
            </li>
          </a>
          <a className="header__link" href="#">
            <li className="header__list-element">
              <Profile />
              Perfil
            </li>
          </a>
          <a className="header__link" href="#">
            <li className="header__list-element">
              <Options />
              Mas opciones
            </li>
          </a>
        </ul>

        <button className="header__button">Twittear</button>
      </nav>
      <div className="container__info-personal">
        <div className="container__img-names">
          <img
            className="container__img"
            width={45}
            height={40}
            src={santi}
            alt=""
          />
          <div className="container__names">
            <p className="container__name">Santiago Vitelli</p>
            <p className="container__username">@santi_vitelli</p>
          </div>
        </div>
        <More />
      </div>
    </StyledHeader>
  );
};
