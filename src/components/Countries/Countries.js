import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { nanoid } from "nanoid";
import { Container } from "./Style";
import Country from "../Country/Country";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [url, setUrl] = useState("https://restcountries.com/v2/all");

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

  return (
    <Container>
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
    </Container>
  );
};

export default Countries;
