import { StyledSection } from "./style";
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
      <div>
        <h3>Obetener verificacion</h3>
        <p>Suscríbete para desbloquear nuevas funciones.</p>
        <button>Obtener verificacion</button>
      </div>
      <div>
        <h3>Qué está pasando</h3>
        <a>Mostrar mas</a>
      </div>
      <div>
        <h3>A quién seguir</h3>
        <a>Mostrar mas</a>
      </div>
      <div>
        <nav>
          <a href="">Condiciones de servicio</a>
          <a href="">Politica de privacidad</a>
          <a href="">Politica de cookies</a>
          <a href="">Accesibilidad</a>
          <a href="">Informacion de anuncios</a>
          <a href="">Mas opciones</a>
          <p>2023 X Corp</p>
        </nav>
      </div>
    </StyledSection>
  );
};
