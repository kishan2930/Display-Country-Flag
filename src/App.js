import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [countryData, setCountryData] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => setCountryData(data))
      .catch((err) => console.error(err));
  }, []);

  const container = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  };

  const card = {
    width: "200px",
    height: "200px",
    border: "2px solid lightblue",
    borderRadius: "10px",
    margin: "10px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px",
  };

  const flag = {
    width: "130px",
    height: "100px",
  };

  return (
    <div style={container}>
      {countryData.map((country) => (
        <div key={country.cca3} style={card}>
          <img
            src={country.flags.png}
            style={flag}
            alt={`Flag of ${country.name.common}`}
          />
          <h2>{country.name.common}</h2>
        </div>
      ))}
    </div>
  );
}
