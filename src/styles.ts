import styled from "styled-components";

export const StyledDiv = styled.div`
  background-color: black;
  color: white;
  display: flex;
  justify-content: center;
  height: 100vh;

  header {
    display: flex;
    flex-direction: column;
  }

  header h3 {
    margin-top: auto;
  }

  nav {
    display: flex;
    flex-direction: column;
  }

  a {
    color: white;
  }

  nav a {
    margin-bottom: 1rem;
    font-size: 1rem;
  }
`;
