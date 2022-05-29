import { Card, CardImg, CardText, CardTitle, CardDescription } from "./Style";

const Country = ({ name, population, region, capital, flagImg }) => {
  return (
    <Card>
      <CardImg src={flagImg} alt="" />
      <CardText>
        <CardTitle>{name}</CardTitle>
        <CardDescription>Population : {population}</CardDescription>
        <CardDescription>Region : {region}</CardDescription>
        <CardDescription>Capital : {capital} </CardDescription>
      </CardText>
    </Card>
  );
};

export default Country;
