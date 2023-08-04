import styled from "styled-components";

export const StyledSection = styled.section`
  min-width: 35rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-left: 2rem;

  .search {
    display: flex;
    width: 100%;
    background-color: #202327;
    align-items: center;
    padding: 1.3rem 3rem;
    margin-top: 0.5rem;
    border-radius: 99rem;
  }

  .search-input {
    width: 100%;
    padding: 0 0.5rem;
    font-size: 1.5rem;
    margin-left: 0.8rem;
    background-color: transparent;
  }
  .container__verificacion {
    margin-top: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    background-color: #202327;
    padding: 0.7rem 2rem;
    border-radius: 1.8rem;
    text-align: start;
    color: #e7e9ea;
  }

  .verificacion__title {
    font-size: 2.1rem;
    font-weight: 700;
    margin-bottom: 0.3rem;
  }
  .verificacion__description {
    font-weight: 700;
    font-size: 1.5rem;
    width: 30ch;
  }
  .verificacion__button {
    background-color: #1d9bf0;
    padding: 0.6rem 2rem;
    border-radius: 19rem;
    font-size: 1.5rem;
    font-weight: 700;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }
  .container {
    background-color: #202327;
    width: 100%;
    border-radius: 1.8rem;
    margin-top: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .tendencias_text {
    font-size: 2rem;
    padding: 1rem 2rem;
    font-weight: 700;
  }
  .tendencia {
    padding: 1rem 2rem;
    display: flex;
    justify-content: space-between;
    width: 100%;
    text-align: start;
  }
  .tendencia__categoria {
    font-size: 1.4rem;
    color: #686c71;
  }

  .tendencia__nombre {
    font-size: 1.6rem;
    font-weight: 700;
  }

  .tendencia__posts {
    font-size: 1.4rem;
    color: #686c71;
  }

  .container__tendencias__showmore {
    padding: 1rem 2rem;
    cursor: pointer;
    font-size: 1.3rem;
    color: #1d9bf0;
  }

  .recomended__header {
    padding: 1rem 2rem;
    font-size: 2rem;
    font-weight: 700;
  }
  .recomender__acc {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 1rem 2rem;
    align-items: center;
  }
  .recomender__info {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  .recomender__img {
    border-radius: 99rem;
  }
  .recomender__container-names {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .recomender__name {
    font-size: 1.6rem;
    font-weight: 700;
  }
  .recomender__username {
    font-size: 1.4rem;
    color: #686c71;
  }
  .recomender__button {
    background-color: white;
    color: black;
    padding: 0.5rem 2rem;
    border-radius: 99rem;
    height: fit-content;
    font-size: 1.3rem;
    font-weight: 600;
  }
  .FAQ {
    width: 100%;
    margin-top: 1.5rem;
    flex-direction: column;
    align-items: flex-start;
    color: #686c71;
    display: flex;
    gap: 1rem;
    text-align: start;
    p {
      padding: 1rem;
      padding-left: 0;
      font-size: 1.2rem;
    }
  }
  .link {
    padding: 0.7rem;
    font-size: 1.3rem;
    text-align: start;
  }
`;
