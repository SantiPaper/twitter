import styled from "styled-components";

export const StyledDiv = styled.div`
  color: white;
  display: flex;
  justify-content: center;
  min-height: 100vh;

  .container {
    display: flex;
    justify-content: space-around;
    width: 100rem;
  }

  .header {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 25.9rem;
  }

  .header h3 {
    margin-top: auto;
  }

  .header__nav ul {
    display: flex;
    flex-direction: column;
  }

  .header__link {
    color: white;
    display: inline-block;
    margin-bottom: 1rem;
    font-size: 2rem;
  }

  .header__list-element {
    display: flex;
    padding: 1rem 0;
    list-style: none;
    display: flex;
    align-items: center;
    width: 100%;
  }

  .header__button {
    background-color: #1d9bf0;
    width: 23rem;
    font-size: 2rem;
    border-radius: 99rem;
    padding: 1.2rem 0;
    margin-top: 1rem;
  }

  .container__info-personal {
    display: flex;
    width: 25.9rem;
    margin-top: auto;
    margin-bottom: 2rem;
    justify-content: space-between;
  }

  .container__img-names {
    display: flex;
    gap: 1.3rem;
  }

  .container__img {
    border-radius: 99rem;
  }

  .container__names {
    font-size: 1.5rem;
  }

  .container__name {
    font-weight: 700;
  }

  .container__username {
    font-weight: 100;
    color: rgba(255, 255, 255, 0.5);
  }
`;
