import { useLocation, useNavigate } from "react-router-dom";
import {
  Card,
  CardImg,
  CardText,
  CardTitle,
  CardDescription,
  BackBtn,
  Container,
} from "./Style";

const CountryDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const {
    name,
    nativeName,
    population,
    region,
    subregion,
    capital,
    flags,
    topLevelDomain,
    currencies,
    languages,
    numericCode,
  } = location.state;

  const countryCurrencies = currencies
    ? currencies.map((currency) => currency.name)
    : currencies;

  const countrylanguages = languages
    ? languages.map((language, index) =>
        index !== languages.length - 1
          ? ` ${language.name} , `
          : ` ${language.name}`
      )
    : languages;

  return (
    <Container>
      <BackBtn onClick={() => navigate("/")}>Back</BackBtn>
      <Card>
        <CardImg src={flags.png} alt="" />
        <CardText>
          <CardTitle>{name}</CardTitle>
          <CardText>
            <CardText>
              <CardDescription>Native Name : {nativeName} </CardDescription>
              <CardDescription>Population : {population}</CardDescription>
              <CardDescription>Region : {region}</CardDescription>
              <CardDescription>Sub Region : {subregion} </CardDescription>
              <CardDescription>Capital : {capital} </CardDescription>
            </CardText>
            <CardText>
              <CardDescription>
                Top Level Domain : {topLevelDomain}
              </CardDescription>
              <CardDescription>
                Currencies : {countryCurrencies}
              </CardDescription>
              <CardDescription>Languages :{countrylanguages}</CardDescription>
            </CardText>
          </CardText>
        </CardText>
      </Card>
    </Container>
  );
};

export default CountryDetails;
