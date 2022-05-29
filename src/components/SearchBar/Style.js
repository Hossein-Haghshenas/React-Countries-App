import styled from "styled-components";

const SearchContainer = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  margin: 3rem 0;
  z-index: 1;
`;

const InputContainer = styled.section`
  position: relative;
`;

const SearchInput = styled.input`
  width: 20rem;
  padding: 0.4rem 2.5rem;
  border: 1px solid;
  outline: none;
  border-radius: 1rem;
`;

const InputIcon = styled.i`
  position: absolute;
  top: 25%;
  left: 5%;
  color: #000;
`;

export { SearchContainer, InputContainer, SearchInput, InputIcon };
