import { StyledDiv } from "./styles";

export default function App() {
  return (
    <StyledDiv>
      <header>
        <nav>
          <a>logo</a>
          <a href="#">Inicio</a>
          <a href="#">Explorar</a>
          <a href="#">Notificacione</a>
          <a href="#">Mensajes</a>
          <a href="#">Listas</a>
          <a href="#">Guardados</a>
          <a href="#">Verificado</a>
          <a href="#">Perfil</a>
          <a href="#">Mas opciones</a>
          <button>Twittear</button>
        </nav>
        <h3>Profile</h3>
      </header>
      <main>
        <section>
          <h2>Inicio</h2>
          <span>Para ti</span>
          <span>Siguiendo</span>
        </section>
      </main>
      <div>
        <section>
          <label htmlFor="search">Lupa</label>
          <input placeholder="" id="search" type="text" />
        </section>
        <section>
          <h3>Obetener verificacion</h3>
          <p>Suscríbete para desbloquear nuevas funciones.</p>
          <button>Obtener verificacion</button>
        </section>
        <section>
          <h3>Qué está pasando</h3>
          <a>Mostrar mas</a>
        </section>
        <section>
          <h3>A quién seguir</h3>
          <a>Mostrar mas</a>
        </section>
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
      </div>
    </StyledDiv>
  );
}
