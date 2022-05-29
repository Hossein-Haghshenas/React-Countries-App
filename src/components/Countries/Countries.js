import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { nanoid } from "nanoid";
import { Container, CountriesContainer } from "./Style";
import Country from "../Country/Country";
import SearchBar from "../SearchBar/SearchBar";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [url, setUrl] = useState("https://restcountries.com/v2/all");
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    try {
      axios.get(url).then((res) => {
        const data = res.data;
        setCountries(data);
      });
    } catch (error) {
      console.log(error);
    }
  }, [url]);

  const searchHandler = (text) => {
    setSearchText(text);
    if (searchText !== "") {
      setUrl(`https://restcountries.com/v2/name/${searchText}`);
    } else {
      setUrl(`https://restcountries.com/v2/all`);
    }
  };

  return (
    <Container>
      <SearchBar searchHandler={searchHandler} searchText={searchText} />
      <CountriesContainer>
        {countries.map((country) => {
          const { name, population, region, capital, flags } = country;
          return (
            <Link to={`/country/${name}`} state={country} key={nanoid()}>
              <Country
                name={name}
                population={population}
                region={region}
                capital={capital}
                flagImg={flags.png}
              />
            </Link>
          );
        })}
      </CountriesContainer>
    </Container>
  );
};

export default Countries;
