import { StyledSection } from "./style";
import More from "../../icons/More";
import Search from "../../icons/Search";
export const Aside = () => {
  return (
    <StyledSection>
      <div className="search">
        <Search />
        <input
          aria-label="busqueda"
          placeholder="Buscar en twitter"
          id="search"
          type="text"
          className="search-input"
        />
      </div>
      <div className="container__verificacion">
        <h2 className="verificacion__title">Obetener verificacion</h2>
        <p className="verificacion__description">
          Suscríbete para desbloquear nuevas funciones.
        </p>
        <button className="verificacion__button">Obtener verificacion</button>
      </div>
      <div className="container">
        <h3 className="tendencias_text">Qué está pasando</h3>
        <article className="tendencia">
          <div>
            <p className="tendencia__categoria">Tendencia en desarrollo</p>
            <h3 className="tendencia__nombre">Santiago Vitelli</h3>
            <p className="tendencia__posts">60 mil posts</p>
          </div>
          <More />
        </article>
        <article className="tendencia">
          <article>
            <p className="tendencia__categoria">Tendencia en desarrollo</p>
            <h3 className="tendencia__nombre">Santiago Vitelli</h3>
            <p className="tendencia__posts">60 mil posts</p>
          </article>
          <More />
        </article>
        <article className="tendencia">
          <div>
            <p className="tendencia__categoria">Tendencia en desarrollo</p>
            <h3 className="tendencia__nombre">Santiago Vitelli</h3>
            <p className="tendencia__posts">60 mil posts</p>
          </div>
          <More />
        </article>
        <article className="tendencia">
          <div>
            <p className="tendencia__categoria">Tendencia en desarrollo</p>
            <h3 className="tendencia__nombre">Santiago Vitelli</h3>
            <p className="tendencia__posts">60 mil posts</p>
          </div>
          <More />
        </article>

        <a className="container__tendencias__showmore">Mostrar mas</a>
      </div>
      <section className="container">
        <h3 className="recomended__header">A quién seguir</h3>
        <article className="recomender__acc">
          <div className="recomender__info">
            <img
              className="recomender__img"
              width={45}
              height={45}
              src="https://pbs.twimg.com/profile_images/1641518931662761986/pU4UK-6h_400x400.jpg"
              alt=""
            />
            <div className="recomender__container-names">
              <p className="recomender__name">Emiliano</p>
              <p className="recomender__username">@AglowKeys</p>
            </div>
          </div>
          <button className="recomender__button">Seguir</button>
        </article>
        <article className="recomender__acc">
          <div className="recomender__info">
            <img
              className="recomender__img"
              width={45}
              height={45}
              src="https://pbs.twimg.com/profile_images/1485735728139100165/EaZ6h5xW_400x400.jpg"
              alt=""
            />
            <div className="recomender__container-names">
              <p className="recomender__name">goncy.tsx</p>
              <p className="recomender__username">@goncy</p>
            </div>
          </div>
          <button className="recomender__button">Seguir</button>
        </article>
        <article className="recomender__acc">
          <div className="recomender__info">
            <img
              className="recomender__img"
              width={45}
              height={45}
              src="https://yt3.googleusercontent.com/ytc/AOPolaSKQnVS0PWsb1jwg2XOzWrHFGLJjw2sQy7xUY6D=s900-c-k-c0x00ffffff-no-rj"
              alt=""
            />
            <div className="recomender__container-names">
              <p className="recomender__name">MiduLive</p>
              <p className="recomender__username">@Midulive</p>
            </div>
          </div>
          <button className="recomender__button">Seguir</button>
        </article>
        <a className="container__tendencias__showmore">Mostrar mas</a>
      </section>
      <section className="FAQ">
        <nav>
          <a className="link" href="">
            Condiciones de servicio
          </a>
          <a className="link" href="">
            Politica de privacidad
          </a>
          <a className="link" href="">
            Politica de cookies
          </a>
          <a className="link" href="">
            Accesibilidad
          </a>
          <a className="link" href="">
            Informacion de anuncios
          </a>
          <a className="link" href="">
            Mas opciones
          </a>
          <p>@ 2023 X Corp</p>
        </nav>
      </section>
    </StyledSection>
  );
};
