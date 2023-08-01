import { StyledMain } from "./style";
import santi from "../../assets/1689446184956.jpeg";
import {
  Images,
  Gif,
  Survey,
  Emoji,
  Program,
  Ubication,
} from "../../icons/AddTweetIcons";
export const Main = () => {
  return (
    <StyledMain>
      <section>
        <div className="container__head">
          <div className="inicio">
            <h2>Inicio</h2>
          </div>
          <div className="container__switch-page">
            <a href="">
              <span className="para-ti">Para ti</span>
            </a>
            <a href="">
              <span className="siguiendo">Siguiendo</span>
            </a>
          </div>
        </div>
        <div className="container__info-tweet">
          <div className="info__img-text">
            <img
              className="info__img"
              src={santi}
              width={45}
              height={45}
              alt=""
            />
          </div>
          <div className="info__tweet">
            <textarea
              placeholder="¡¿Que esta pasando?!"
              className="info__textarea"
              name=""
              id=""
            ></textarea>
            <div className="container__emotes-button">
              <div className="container__emotes">
                <Images />
                <Gif />
                <Survey />
                <Emoji />
                <Program />
                <Ubication />
              </div>
              <button className="button">Publicar</button>
            </div>
          </div>
        </div>
      </section>
    </StyledMain>
  );
};
