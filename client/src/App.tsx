import { Main } from "./components/Main";
import { Nav } from "./components/Nav";
import { Aside } from "./components/Aside";
import { StyledDiv } from "./styles";

export default function App() {
  return (
    <StyledDiv>
      <div className="container">
        <Nav />
        <Main />
        <Aside />
      </div>
    </StyledDiv>
  );
}
