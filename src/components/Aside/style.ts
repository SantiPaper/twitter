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
`;
