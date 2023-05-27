import styled from "styled-components";

export const Container = styled.section`
  width: 85%;
  height: 100%;
  margin-top: 4rem;
  padding: 3rem 4rem;
  @media (max-width: 768px) {
    width: 100%;
    padding: 3rem 1rem;
  }
`;

export const BackBtn = styled.button`
  border: 1px solid;
  outline: none;
  border-radius: 1rem;
  padding: 1rem 2.5rem;
  cursor: pointer;
`;

export const Country = styled.section`
  display: flex;
  flex-wrap: wrap;
  border-radius: 1rem;
  margin: 3rem 0;
`;

export const CountryImg = styled.img`
  max-width: 30rem;
  height: 22rem;
  border-radius: 1rem;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const CountryText = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 100%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Row = styled.section`
  display: flex;
`;

export const Col = styled.section`
  display: flex;
  flex-direction: column;
  margin-left: 1.5rem;
`;

export const CountryTitle = styled.h3`
  padding: 1rem 0;
  font-weight: 700;
  margin-left: 1.5rem;
`;

export const CountryDescription = styled.p`
  font-size: 1rem;
`;

export const DescriptionText = styled.span`
  font-weight: 300;
`;

export const BordersContainer = styled.section`
  display: flex;
  justify-content: start;
  align-items: baseline;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 1.5rem;
  margin-left: 1.5rem;
  font-weight: 300;
`;

export const BordersCountry = styled.button`
  border: 1px solid;
  outline: none;
  padding: 0.5rem 1rem;
  margin: 0.5rem;
  cursor: pointer;
`;
