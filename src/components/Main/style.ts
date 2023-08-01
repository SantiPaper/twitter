import styled from "styled-components";

export const StyledMain = styled.main`
  min-width: 60rem;
  border-left: 1px solid rgba(255, 255, 255, 0.2);
  border-right: 1px solid rgba(255, 255, 255, 0.2);

  .container__head {
    width: 100%;
  }
  .inicio {
    padding: 0.8rem 2rem;
    font-size: 2rem;
    font-weight: 700;
  }
  .container__switch-page {
    display: flex;
    justify-content: space-around;
    font-size: 1.5rem;
    padding: 0 1rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  }
  .container__switch-page a {
    width: 50%;
    display: flex;
    justify-content: center;
  }

  .container__switch-page span {
    padding-top: 2rem;
    padding-bottom: 1rem;
    padding-inline: 0.5rem;
    font-weight: 700;
  }

  .para-ti {
    padding: inherit;
    border-bottom: 3px solid #1d9bf0;
  }

  .siguiendo {
    color: rgba(255, 255, 255, 0.5);
  }

  .container__info-tweet {
    display: flex;
    padding: 2rem 1rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  }
  .info__img {
    display: flex;
  }
  .info__tweet {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .info__textarea {
    background-color: transparent;
    width: 90%;
    resize: none;
    font-size: 2rem;
    max-height: 6rem;
  }

  .info__img {
    margin-left: 1rem;
    border-radius: 99rem;
  }

  .container__emotes-button {
    display: flex;
    justify-content: space-between;
    width: 90%;
  }
  .container__emotes {
    display: flex;
    gap: 2rem;
    align-items: center;
  }

  .button {
    background-color: #1d9bf0;
    padding: 0.8rem 2rem;
    font-size: 1.3rem;
    border-radius: 99rem;
    font-weight: 700;
  }
`;
