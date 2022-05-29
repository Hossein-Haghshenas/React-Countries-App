import styled from "styled-components";

const SearchContainer = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  margin: 3rem 0;
`;

const InputContainer = styled.section`
  position: relative;
`;

const SearchInput = styled.input`
  padding: 0.4rem 2rem;
  border-radius: 1rem;
`;

const InputIcon = styled.section`
  position: absolute;
  top: 25%;
  left: 5%;
`;

export { SearchContainer, InputContainer, SearchInput, InputIcon };
