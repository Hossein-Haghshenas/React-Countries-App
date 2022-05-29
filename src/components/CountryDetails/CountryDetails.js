import { useLocation, useNavigate, Link } from "react-router-dom";
import {
  BackBtn,
  Container,
  Country,
  CountryImg,
  CountryText,
  Row,
  Col,
  CountryTitle,
  CountryDescription,
  DescriptionText,
  BordersContainer,
  BordersCountry,
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
    borders,
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

  const countryBorders =
    borders &&
    borders.map((border) => <BordersCountry>{border}</BordersCountry>);

  return (
    <Container>
      <BackBtn onClick={() => navigate("/")}>Back</BackBtn>
      <Country>
        <CountryImg src={flags.png} alt={name} />

        <CountryText className="ml-2">
          <Row>
            <CountryTitle>{name}</CountryTitle>
          </Row>
          <Row>
            <Col>
              <CountryDescription>
                Native Name : <DescriptionText>{nativeName}</DescriptionText>
              </CountryDescription>
              <CountryDescription>
                Population : <DescriptionText>{population}</DescriptionText>
              </CountryDescription>
              <CountryDescription>
                Region : <DescriptionText>{region}</DescriptionText>
              </CountryDescription>
              <CountryDescription>
                Sub Region : <DescriptionText>{subregion}</DescriptionText>
              </CountryDescription>
              <CountryDescription>
                Capital : <DescriptionText>{capital}</DescriptionText>
              </CountryDescription>
            </Col>
            <Col>
              <CountryDescription>
                Top Level Domain :
                <DescriptionText>{topLevelDomain}</DescriptionText>
              </CountryDescription>
              <CountryDescription>
                Currencies :
                <DescriptionText>{countryCurrencies}</DescriptionText>
              </CountryDescription>
              <CountryDescription>
                Languages :<DescriptionText>{countrylanguages}</DescriptionText>
              </CountryDescription>
            </Col>
          </Row>
          <BordersContainer>
            Border Countries : {countryBorders}
          </BordersContainer>
        </CountryText>
      </Country>
    </Container>
  );
};

export default CountryDetails;
